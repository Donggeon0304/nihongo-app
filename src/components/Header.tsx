'use client';

import React, { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { loadUserStats, UserStats } from '@/lib/storage';
import { useAuth } from '@/components/AuthProvider';
import ThemeToggle from '@/components/ThemeToggle';
import { BookOpen, Calendar, Cloud, Flame, GraduationCap, Home, Languages, LogIn, LogOut, Loader2, Sparkles } from 'lucide-react';

export default function Header() {
  const pathname = usePathname();
  const [stats, setStats] = useState<UserStats | null>(null);
  const { user, loading, signInWithGoogle, signOut, isSyncing } = useAuth();
  const [profileOpen, setProfileOpen] = useState(false);
  const profileRef = useRef<HTMLDivElement>(null);

  // 외부 클릭 시 드롭다운 닫기
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (profileRef.current && !profileRef.current.contains(e.target as Node)) {
        setProfileOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    // 최초 로드 및 로컬스토리지 변경 이벤트 감지
    setStats(loadUserStats());

    const handleStorageChange = () => {
      setStats(loadUserStats());
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, [pathname]);

  const navItems = [
    { href: '/', label: '대시보드', icon: Home },
    { href: '/kana', label: '카나 훈련소', icon: Languages },
    { href: '/vocab', label: '단어장', icon: BookOpen },
    { href: '/quiz', label: '쪽지시험', icon: GraduationCap },
    { href: '/grammar', label: '기초 문법', icon: Sparkles },
    { href: '/calendar', label: '학습 기록', icon: Calendar },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* 로고 */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-rose-500 to-amber-500 flex items-center justify-center text-white shadow-md shadow-rose-500/20 group-hover:scale-105 transition-transform">
            <span className="text-xl font-black">日</span>
          </div>
          <div>
            <div className="font-bold text-lg leading-tight bg-gradient-to-r from-rose-600 to-amber-600 bg-clip-text text-transparent">
              NihonGo!
            </div>
            <div className="text-xs text-zinc-400 font-medium">나만의 일본어 마스터</div>
          </div>
        </Link>

        {/* 데스크톱 네비게이션 */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors ${
                  isActive
                    ? 'bg-rose-50 dark:bg-rose-950/40 text-rose-600 dark:text-rose-400'
                    : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800/60'
                }`}
              >
                <Icon className="w-4 h-4" />
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* 스트릭 & 출석 뱃지 & 로그인 & 테마 토글 */}
        <div className="flex items-center gap-2.5">
          <Link
            href="/calendar"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-50 dark:bg-amber-950/40 border border-amber-200/80 dark:border-amber-800/80 text-amber-700 dark:text-amber-300 font-bold text-xs hover:bg-amber-100 transition-colors"
            title="연속 출석 스트릭"
          >
            <Flame className="w-4 h-4 text-amber-500 fill-amber-500 animate-pulse" />
            <span>{stats?.streak ?? 0}일 연속</span>
          </Link>

          {/* 로그인/프로필 */}
          {loading ? (
            <div className="w-8 h-8 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center">
              <Loader2 className="w-4 h-4 animate-spin text-zinc-400" />
            </div>
          ) : user ? (
            <div className="relative" ref={profileRef}>
              <button
                onClick={() => setProfileOpen(!profileOpen)}
                className="flex items-center gap-1.5 px-1.5 py-1.5 rounded-full bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
              >
                {user.user_metadata?.avatar_url ? (
                  <img
                    src={user.user_metadata.avatar_url}
                    alt=""
                    className="w-7 h-7 rounded-full ring-2 ring-emerald-400"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <div className="w-7 h-7 rounded-full bg-rose-500 text-white flex items-center justify-center text-xs font-bold ring-2 ring-emerald-400">
                    {user.email?.[0]?.toUpperCase() ?? '?'}
                  </div>
                )}
              </button>

              {/* 프로필 드롭다운 */}
              {profileOpen && (
                <div className="absolute right-0 top-12 w-64 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-2xl shadow-xl z-50 overflow-hidden">
                  {/* 사용자 정보 */}
                  <div className="px-4 py-3 border-b border-zinc-100 dark:border-zinc-800">
                    <div className="flex items-center gap-3">
                      {user.user_metadata?.avatar_url ? (
                        <img
                          src={user.user_metadata.avatar_url}
                          alt=""
                          className="w-10 h-10 rounded-full"
                          referrerPolicy="no-referrer"
                        />
                      ) : (
                        <div className="w-10 h-10 rounded-full bg-rose-500 text-white flex items-center justify-center font-bold">
                          {user.email?.[0]?.toUpperCase() ?? '?'}
                        </div>
                      )}
                      <div className="min-w-0 flex-1">
                        <div className="text-sm font-bold text-zinc-900 dark:text-zinc-100 truncate">
                          {user.user_metadata?.full_name || '사용자'}
                        </div>
                        <div className="text-xs text-zinc-500 dark:text-zinc-400 truncate">
                          {user.email}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 동기화 상태 */}
                  <div className="px-4 py-2.5 border-b border-zinc-100 dark:border-zinc-800">
                    <div className="flex items-center gap-2 text-xs text-emerald-600 dark:text-emerald-400 font-medium">
                      <Cloud className="w-3.5 h-3.5" />
                      클라우드 동기화 활성화됨
                    </div>
                  </div>

                  {/* 로그아웃 */}
                  <button
                    onClick={() => {
                      setProfileOpen(false);
                      signOut();
                    }}
                    disabled={isSyncing}
                    className="w-full px-4 py-3 flex items-center gap-2 text-sm font-medium text-red-500 hover:bg-red-50 dark:hover:bg-red-950/30 transition-colors"
                  >
                    <LogOut className="w-4 h-4" />
                    {isSyncing ? '동기화 중...' : '로그아웃'}
                  </button>
                </div>
              )}
            </div>
          ) : (
            <button
              onClick={signInWithGoogle}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-rose-50 dark:bg-rose-950/40 border border-rose-200/80 dark:border-rose-800/80 text-rose-600 dark:text-rose-400 font-bold text-xs hover:bg-rose-100 dark:hover:bg-rose-950/60 transition-colors"
              title="Google 로그인"
            >
              <LogIn className="w-3.5 h-3.5" />
              <span className="hidden md:inline">로그인</span>
            </button>
          )}

          <ThemeToggle />
        </div>
      </div>

      {/* 모바일 하단/서브 탭바 */}
      <div className="md:hidden flex items-center justify-around border-t border-zinc-100 dark:border-zinc-800/80 py-2 bg-white dark:bg-zinc-900 px-2 overflow-x-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-medium shrink-0 transition-colors ${
                isActive
                  ? 'text-rose-600 dark:text-rose-400 font-bold'
                  : 'text-zinc-500 dark:text-zinc-400'
              }`}
            >
              <Icon className="w-4 h-4" />
              {item.label}
            </Link>
          );
        })}
      </div>
    </header>
  );
}
