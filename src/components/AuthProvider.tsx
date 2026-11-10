'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { Session, User } from '@supabase/supabase-js';
import { supabase } from '@/lib/supabase';
import { UserStats, loadUserStats, saveUserStats, getInitialStats } from '@/lib/storage';

interface AuthContextType {
  user: User | null;
  session: Session | null;
  loading: boolean;
  signInWithGoogle: () => Promise<void>;
  signOut: () => Promise<void>;
  syncToCloud: () => Promise<void>;
  syncFromCloud: () => Promise<void>;
  isSyncing: boolean;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  session: null,
  loading: true,
  signInWithGoogle: async () => {},
  signOut: async () => {},
  syncToCloud: async () => {},
  syncFromCloud: async () => {},
  isSyncing: false,
});

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const [isSyncing, setIsSyncing] = useState(false);

  useEffect(() => {
    // 현재 세션 가져오기
    supabase.auth.getSession().then(({ data: { session: s } }) => {
      setSession(s);
      setUser(s?.user ?? null);
      setLoading(false);

      // 로그인 상태면 클라우드에서 동기화
      if (s?.user) {
        syncFromCloudInternal(s.user.id);
      }
    });

    // 인증 상태 변화 리스너
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_event, s) => {
        setSession(s);
        setUser(s?.user ?? null);
        setLoading(false);
      }
    );

    return () => subscription.unsubscribe();
  }, []);

  const signInWithGoogle = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: typeof window !== 'undefined'
            ? `${window.location.origin}`
            : undefined,
        },
      });
      if (error) throw error;
    } catch (error: unknown) {
      console.error('Google 로그인 실패:', error);
    }
  };

  const signOut = async () => {
    try {
      // 로그아웃 전 현재 데이터를 클라우드에 저장
      if (user) {
        await syncToCloudInternal(user.id);
      }
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
    } catch (error: unknown) {
      console.error('로그아웃 실패:', error);
    }
  };

  // 로컬 → 클라우드 동기화 (Supabase DB upsert)
  const syncToCloudInternal = async (uid: string) => {
    setIsSyncing(true);
    try {
      const stats = loadUserStats();
      const lastStudied = typeof window !== 'undefined'
        ? localStorage.getItem('nihongo_vocab_last_studied')
        : null;

      const { error } = await supabase
        .from('user_data')
        .upsert({
          user_id: uid,
          stats: stats,
          last_studied: lastStudied ? JSON.parse(lastStudied) : null,
          theme: typeof window !== 'undefined'
            ? localStorage.getItem('nihongo_theme') || 'light'
            : 'light',
          updated_at: new Date().toISOString(),
        }, { onConflict: 'user_id' });

      if (error) throw error;
    } catch (error: unknown) {
      console.error('클라우드 동기화 실패:', error);
    } finally {
      setIsSyncing(false);
    }
  };

  // 클라우드 → 로컬 동기화
  const syncFromCloudInternal = async (uid: string) => {
    setIsSyncing(true);
    try {
      const { data, error } = await supabase
        .from('user_data')
        .select('*')
        .eq('user_id', uid)
        .single();

      if (error && error.code !== 'PGRST116') throw error; // PGRST116 = no rows

      if (data) {
        // 클라우드 데이터와 로컬 데이터 병합
        const cloudStats: UserStats = data.stats || getInitialStats();
        const localStats = loadUserStats();

        const merged: UserStats = {
          attendanceDates: [...new Set([...localStats.attendanceDates, ...cloudStats.attendanceDates])],
          streak: Math.max(localStats.streak, cloudStats.streak),
          lastActiveDate: localStats.lastActiveDate > cloudStats.lastActiveDate
            ? localStats.lastActiveDate
            : cloudStats.lastActiveDate,
          bookmarks: [...new Set([...localStats.bookmarks, ...cloudStats.bookmarks])],
          wrongWordIds: [...new Set([...localStats.wrongWordIds, ...cloudStats.wrongWordIds])],
          quizHistory: mergeQuizHistory(localStats.quizHistory, cloudStats.quizHistory),
        };

        saveUserStats(merged);

        // 학습 마커 복원
        if (data.last_studied && typeof window !== 'undefined') {
          const localMarker = localStorage.getItem('nihongo_vocab_last_studied');
          if (!localMarker) {
            localStorage.setItem('nihongo_vocab_last_studied', JSON.stringify(data.last_studied));
          }
        }

        // 테마 복원
        if (data.theme && typeof window !== 'undefined') {
          localStorage.setItem('nihongo_theme', data.theme);
        }
      }
    } catch (error: unknown) {
      console.error('클라우드에서 불러오기 실패:', error);
    } finally {
      setIsSyncing(false);
    }
  };

  const syncToCloud = async () => {
    if (user) await syncToCloudInternal(user.id);
  };

  const syncFromCloud = async () => {
    if (user) await syncFromCloudInternal(user.id);
  };

  return (
    <AuthContext.Provider
      value={{ user, session, loading, signInWithGoogle, signOut, syncToCloud, syncFromCloud, isSyncing }}
    >
      {children}
    </AuthContext.Provider>
  );
}

// 퀴즈 히스토리 병합 (id 기준 중복 제거, 최신순 정렬)
function mergeQuizHistory(
  a: UserStats['quizHistory'],
  b: UserStats['quizHistory']
): UserStats['quizHistory'] {
  const map = new Map<string, UserStats['quizHistory'][0]>();
  [...a, ...b].forEach((q) => map.set(q.id, q));
  return Array.from(map.values()).sort((x, y) => y.timestamp - x.timestamp);
}
