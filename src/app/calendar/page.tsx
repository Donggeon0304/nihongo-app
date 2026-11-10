'use client';

import React, { useState, useEffect } from 'react';
import StreakCalendar from '@/components/StreakCalendar';
import { loadUserStats, removeFromWrongWords, UserStats } from '@/lib/storage';
import { ALL_VOCAB } from '@/data/vocabData';
import { playJapaneseSpeech } from '@/lib/speech';
import Link from 'next/link';
import {
  Calendar,
  Flame,
  Trophy,
  BookX,
  History,
  CheckCircle,
  Volume2,
  Trash2,
  GraduationCap,
} from 'lucide-react';

export default function CalendarPage() {
  const [stats, setStats] = useState<UserStats | null>(null);

  useEffect(() => {
    setStats(loadUserStats());
  }, []);

  const handleRemoveWrong = (id: string) => {
    removeFromWrongWords(id);
    setStats(loadUserStats());
  };

  if (!stats) return null;

  // 오답노트에 담긴 단어 객체 매핑
  const wrongWordObjects = ALL_VOCAB.filter((w) => stats.wrongWordIds.includes(w.id));

  return (
    <div className="space-y-6">
      {/* 타이틀 */}
      <div className="pb-4 border-b border-zinc-200 dark:border-zinc-800">
        <h1 className="text-2xl md:text-3xl font-black flex items-center gap-2.5">
          <Calendar className="w-7 h-7 text-rose-500" />
          학습 기록 & 출석체크
        </h1>
        <p className="text-sm text-zinc-500 mt-1">
          매일 출석 현황을 확인하고, 지난 시험 성적과 오답노트를 체계적으로 복습하세요.
        </p>
      </div>

      {/* 요약 대시보드 카드 4개 */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5">
        <div className="p-5 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-amber-50 dark:bg-amber-950/60 text-amber-500 flex items-center justify-center">
            <Flame className="w-6 h-6 fill-current animate-pulse" />
          </div>
          <div>
            <div className="text-xs text-zinc-400 font-medium">연속 학습일</div>
            <div className="text-2xl font-black text-zinc-900 dark:text-zinc-100">
              {stats.streak}일
            </div>
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-rose-50 dark:bg-rose-950/60 text-rose-500 flex items-center justify-center">
            <CheckCircle className="w-6 h-6" />
          </div>
          <div>
            <div className="text-xs text-zinc-400 font-medium">총 출석일</div>
            <div className="text-2xl font-black text-zinc-900 dark:text-zinc-100">
              {stats.attendanceDates.length}일
            </div>
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-purple-50 dark:bg-purple-950/60 text-purple-500 flex items-center justify-center">
            <Trophy className="w-6 h-6" />
          </div>
          <div>
            <div className="text-xs text-zinc-400 font-medium">응시한 쪽지시험</div>
            <div className="text-2xl font-black text-zinc-900 dark:text-zinc-100">
              {stats.quizHistory.length}회
            </div>
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-500 flex items-center justify-center">
            <BookX className="w-6 h-6" />
          </div>
          <div>
            <div className="text-xs text-zinc-400 font-medium">보관된 오답 단어</div>
            <div className="text-2xl font-black text-zinc-900 dark:text-zinc-100">
              {stats.wrongWordIds.length}개
            </div>
          </div>
        </div>
      </div>

      {/* 출석 캘린더 */}
      <StreakCalendar stats={stats} />

      {/* 2열 레이아웃: 오답노트 & 최근 시험 기록 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* 오답노트 관리 */}
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-6 shadow-sm">
          <div className="flex items-center justify-between pb-4 border-b border-zinc-100 dark:border-zinc-800 mb-4">
            <h3 className="text-base font-bold flex items-center gap-2">
              <BookX className="w-5 h-5 text-rose-500" />
              오답노트 ({wrongWordObjects.length}단어)
            </h3>
            {wrongWordObjects.length > 0 && (
              <Link
                href="/quiz"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-rose-50 dark:bg-rose-950/40 text-rose-600 dark:text-rose-400 text-xs font-bold hover:bg-rose-100"
              >
                <GraduationCap className="w-4 h-4" />
                오답만 다시 시험치기
              </Link>
            )}
          </div>

          {wrongWordObjects.length > 0 ? (
            <div className="space-y-2 max-h-80 overflow-y-auto pr-1">
              {wrongWordObjects.map((w) => (
                <div
                  key={w.id}
                  className="p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-100 dark:border-zinc-800 flex items-center justify-between text-xs"
                >
                  <div className="flex items-baseline gap-2">
                    <strong className="text-sm font-black text-zinc-900 dark:text-zinc-100">
                      {w.kanji}
                    </strong>
                    <span className="text-rose-500 font-semibold">{w.kana}</span>
                    <span className="text-zinc-400">·</span>
                    <span className="text-zinc-600 dark:text-zinc-300 font-medium">
                      {w.meaning}
                    </span>
                  </div>

                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => playJapaneseSpeech(w.kanji || w.kana)}
                      className="p-1.5 rounded-lg text-zinc-400 hover:text-rose-500 hover:bg-zinc-200 dark:hover:bg-zinc-700"
                      title="원어민 발음"
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleRemoveWrong(w.id)}
                      className="p-1.5 rounded-lg text-zinc-400 hover:text-emerald-500 hover:bg-zinc-200 dark:hover:bg-zinc-700"
                      title="외움 완료 (오답노트에서 삭제)"
                    >
                      <CheckCircle className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="py-12 text-center text-zinc-400 text-xs">
              현재 오답노트에 저장된 단어가 없습니다. 완벽합니다! 👏
            </div>
          )}
        </div>

        {/* 최근 시험 응시 히스토리 */}
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-6 shadow-sm">
          <div className="flex items-center justify-between pb-4 border-b border-zinc-100 dark:border-zinc-800 mb-4">
            <h3 className="text-base font-bold flex items-center gap-2">
              <History className="w-5 h-5 text-blue-500" />
              최근 시험 결과 히스토리
            </h3>
            <span className="text-xs text-zinc-400">최근 10건</span>
          </div>

          {stats.quizHistory.length > 0 ? (
            <div className="space-y-2.5 max-h-80 overflow-y-auto pr-1">
              {stats.quizHistory.slice(0, 10).map((q) => (
                <div
                  key={q.id}
                  className="p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-100 dark:border-zinc-800 flex items-center justify-between text-xs"
                >
                  <div>
                    <div className="font-bold text-zinc-800 dark:text-zinc-200">
                      {q.category}
                    </div>
                    <div className="text-[11px] text-zinc-400 mt-0.5">
                      {q.date} · {q.correctCount} / {q.totalQuestions} 문제 정답
                    </div>
                  </div>

                  <div
                    className={`text-base font-black px-2.5 py-1 rounded-lg ${
                      q.score >= 80
                        ? 'bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300'
                        : q.score >= 50
                        ? 'bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300'
                        : 'bg-rose-100 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300'
                    }`}
                  >
                    {q.score}점
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="py-12 text-center text-zinc-400 text-xs">
              아직 응시한 쪽지시험 기록이 없습니다.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
