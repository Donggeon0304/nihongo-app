'use client';

import React, { useState } from 'react';
import { UserStats } from '@/lib/storage';
import { ChevronLeft, ChevronRight, CheckCircle2, Trophy, Calendar as CalendarIcon } from 'lucide-react';

interface StreakCalendarProps {
  stats: UserStats;
}

export default function StreakCalendar({ stats }: StreakCalendarProps) {
  const [currentDate, setCurrentDate] = useState<Date | null>(null);

  React.useEffect(() => {
    setCurrentDate(new Date());
  }, []);

  if (!currentDate) {
    return <div className="h-64 rounded-3xl bg-zinc-100 dark:bg-zinc-800 animate-pulse" />;
  }

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth(); // 0-indexed

  // 이전 달, 다음 달 이동
  const prevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };
  const nextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  // 해당 월 캘린더 데이터 계산
  const firstDayIndex = new Date(year, month, 1).getDay(); // 0: 일요일
  const lastDate = new Date(year, month + 1, 0).getDate(); // 해당 월 마지막 날

  const days: { dateStr: string; dayNum: number; isCurrentMonth: boolean }[] = [];

  // 이전 달 빈 칸
  for (let i = 0; i < firstDayIndex; i++) {
    days.push({ dateStr: '', dayNum: 0, isCurrentMonth: false });
  }

  // 이번 달 일자
  for (let d = 1; d <= lastDate; d++) {
    const dStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
    days.push({ dateStr: dStr, dayNum: d, isCurrentMonth: true });
  }

  // 특정 날짜의 퀴즈 결과 조회
  const getQuizForDate = (dateStr: string) => {
    return stats.quizHistory.filter((q) => q.date === dateStr);
  };

  const dayNames = ['일', '월', '화', '수', '목', '금', '토'];

  // 오늘 날짜 문자열
  const now = new Date();
  const todayStr = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;

  return (
    <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-6 shadow-sm">
      {/* 캘린더 헤더 */}
      <div className="flex items-center justify-between pb-4 border-b border-zinc-100 dark:border-zinc-800 mb-4">
        <h3 className="text-base font-bold flex items-center gap-2">
          <CalendarIcon className="w-5 h-5 text-rose-500" />
          {year}년 {month + 1}월 출석 캘린더
        </h3>
        <div className="flex items-center gap-1">
          <button
            onClick={prevMonth}
            className="p-1.5 rounded-lg border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={nextMonth}
            className="p-1.5 rounded-lg border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* 요일 헤더 */}
      <div className="grid grid-cols-7 gap-1 text-center text-xs font-semibold text-zinc-400 mb-2">
        {dayNames.map((d, idx) => (
          <div key={d} className={idx === 0 ? 'text-rose-500' : idx === 6 ? 'text-blue-500' : ''}>
            {d}
          </div>
        ))}
      </div>

      {/* 날짜 그리드 */}
      <div className="grid grid-cols-7 gap-1.5">
        {days.map((item, idx) => {
          if (!item.isCurrentMonth) {
            return <div key={`empty_${idx}`} className="h-16 md:h-20" />;
          }

          const isAttended = stats.attendanceDates.includes(item.dateStr);
          const isToday = item.dateStr === todayStr;
          const quizzes = getQuizForDate(item.dateStr);
          const highestScore = quizzes.length > 0 ? Math.max(...quizzes.map((q) => q.score)) : null;

          return (
            <div
              key={item.dateStr}
              className={`h-16 md:h-20 p-1.5 rounded-xl border-2 flex flex-col justify-between transition-all ${
                isToday
                  ? 'border-rose-500 dark:border-rose-400 ring-2 ring-rose-200 dark:ring-rose-900/40 bg-rose-50 dark:bg-rose-950/30'
                  : isAttended
                  ? 'border-rose-200 dark:border-rose-900 bg-rose-50/50 dark:bg-rose-950/20'
                  : 'border-zinc-100 dark:border-zinc-800 bg-zinc-50/40 dark:bg-zinc-900/40'
              }`}
            >
              <div className="flex items-center justify-between">
                <span
                  className={`text-xs font-bold ${
                    isToday
                      ? 'text-rose-600 dark:text-rose-300 bg-rose-500/10 dark:bg-rose-500/20 px-1.5 py-0.5 rounded-full'
                      : isAttended ? 'text-rose-600 dark:text-rose-400' : 'text-zinc-600 dark:text-zinc-400'
                  }`}
                >
                  {isToday ? '오늘' : item.dayNum}
                </span>
                {isAttended && (
                  <span className="text-[10px] text-rose-500 font-black">🌸</span>
                )}
              </div>

              {/* 해당 일자의 시험 결과 표시 */}
              {highestScore !== null && (
                <div className="mt-auto">
                  <div className="text-[10px] px-1 py-0.5 rounded bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 font-bold text-center">
                    {highestScore}점
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
