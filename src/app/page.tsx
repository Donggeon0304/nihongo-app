'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { loadUserStats, UserStats } from '@/lib/storage';
import { VOCAB_DATA } from '@/data/vocabData';
import { playJapaneseSpeech } from '@/lib/speech';
import { kanaToHangul } from '@/lib/kanaToHangul';
import {
  BookOpen,
  Calendar,
  Flame,
  GraduationCap,
  Languages,
  Play,
  Sparkles,
  Volume2,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';

export default function HomePage() {
  const [stats, setStats] = useState<UserStats | null>(null);
  const [todayWords, setTodayWords] = useState(VOCAB_DATA.slice(0, 3));
  const [isTodayAttended, setIsTodayAttended] = useState<boolean>(false);

  useEffect(() => {
    const loadedStats = loadUserStats();
    setStats(loadedStats);

    const todayStr = new Date().toISOString().split('T')[0];
    setIsTodayAttended(loadedStats.attendanceDates.includes(todayStr));

    // 오늘의 단어 3개 랜덤 추출
    const shuffled = [...VOCAB_DATA].sort(() => 0.5 - Math.random());
    setTodayWords(shuffled.slice(0, 3));
  }, []);

  return (
    <div className="space-y-8">
      {/* 1. 상단 환영 & 스트릭 히어로 배너 */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-rose-500 via-rose-600 to-amber-500 text-white p-7 md:p-10 shadow-xl shadow-rose-500/15">
        <div className="relative z-10 max-w-2xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-bold mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            초보자부터 고수까지 맞춤형 학습
          </div>

          <h1 className="text-3xl md:text-4xl font-black leading-tight mb-2">
            오늘도 즐겁게 일본어 한 걸음! 🌸
          </h1>
          <p className="text-sm md:text-base text-rose-100 mb-6 font-medium">
            히라가나 행별 연습부터 N5~N1 쪽지시험, 원어민 발음까지 나만의 속도로 공부하세요.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/quiz"
              className="px-5 py-3 rounded-xl bg-white text-rose-600 font-bold text-sm shadow hover:bg-rose-50 active:scale-95 transition-all flex items-center gap-2"
            >
              <Play className="w-4 h-4 fill-current" />
              오늘의 쪽지시험 시작
            </Link>
            <Link
              href="/kana"
              className="px-5 py-3 rounded-xl bg-black/20 hover:bg-black/30 backdrop-blur-md text-white font-bold text-sm transition-all flex items-center gap-2"
            >
              <Languages className="w-4 h-4" />
              카나 행별 훈련하기
            </Link>
          </div>
        </div>

        {/* 우측 상단 잔디/스트릭 위젯 */}
        <div className="absolute right-6 top-6 hidden md:flex flex-col items-end gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4">
          <div className="flex items-center gap-2 text-amber-300 font-black text-2xl">
            <Flame className="w-6 h-6 fill-amber-300" />
            {stats?.streak ?? 0}일 연속
          </div>
          <div className="text-xs text-rose-100 flex items-center gap-1 font-medium">
            {isTodayAttended ? (
              <>
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-300" />
                오늘 출석 완료!
              </>
            ) : (
              '오늘 출석 아직 전입니다'
            )}
          </div>
        </div>
      </div>

      {/* 2. 핵심 학습 메뉴 4대장 */}
      <div>
        <h2 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-4 flex items-center gap-2">
          <span>빠른 학습 메뉴</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* 메뉴 1: 카나 훈련소 */}
          <Link
            href="/kana"
            className="p-5 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-rose-400 dark:hover:border-rose-500 shadow-sm hover:shadow-md transition-all group flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-rose-50 dark:bg-rose-950/60 text-rose-500 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <Languages className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-base text-zinc-900 dark:text-zinc-100 mb-1">
                카나 훈련소
              </h3>
              <p className="text-xs text-zinc-500 leading-relaxed">
                행(行) 단위로 원하는 글자만 골라 랜덤 생성하고 직접 읽어보며 마스터!
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between text-xs font-bold text-rose-600 dark:text-rose-400">
              <span>훈련 시작</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          {/* 메뉴 2: 쪽지시험 */}
          <Link
            href="/quiz"
            className="p-5 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-amber-400 dark:hover:border-amber-500 shadow-sm hover:shadow-md transition-all group flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-50 dark:bg-amber-950/60 text-amber-500 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-base text-zinc-900 dark:text-zinc-100 mb-1">
                단어 쪽지시험
              </h3>
              <p className="text-xs text-zinc-500 leading-relaxed">
                10개, 20개, 50개, 100개씩 원하는 개수로 시험보고 오답노트에 자동 저장!
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between text-xs font-bold text-amber-600 dark:text-amber-400">
              <span>시험 보기</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          {/* 메뉴 3: 단어장 */}
          <Link
            href="/vocab"
            className="p-5 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-blue-400 dark:hover:border-blue-500 shadow-sm hover:shadow-md transition-all group flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-500 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-base text-zinc-900 dark:text-zinc-100 mb-1">
                일본어 단어장
              </h3>
              <p className="text-xs text-zinc-500 leading-relaxed">
                JLPT N5~N1 급수별, 일상/여행 카테고리별 단어와 원어민 발음 재생.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between text-xs font-bold text-blue-600 dark:text-blue-400">
              <span>단어 탐색</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          {/* 메뉴 4: 기초 문법 */}
          <Link
            href="/grammar"
            className="p-5 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-emerald-400 dark:hover:border-emerald-500 shadow-sm hover:shadow-md transition-all group flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-500 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-base text-zinc-900 dark:text-zinc-100 mb-1">
                핵심 문법
              </h3>
              <p className="text-xs text-zinc-500 leading-relaxed">
                초보자가 꼭 알아야 할 기초 조사, 정중형, 동사 3그룹 변형 완벽 정리.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between text-xs font-bold text-emerald-600 dark:text-emerald-400">
              <span>문법 보기</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        </div>
      </div>

      {/* 3. 오늘 추천 단어 3개 미리보기 */}
      <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-6 shadow-sm">
        <div className="flex items-center justify-between pb-4 border-b border-zinc-100 dark:border-zinc-800 mb-4">
          <h3 className="text-base font-bold flex items-center gap-2">
            <span>✨ 오늘의 추천 단어</span>
          </h3>
          <Link
            href="/vocab"
            className="text-xs font-bold text-rose-600 dark:text-rose-400 hover:underline flex items-center gap-1"
          >
            전체 단어장 보기
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {todayWords.map((word) => (
            <div
              key={word.id}
              className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-100 dark:border-zinc-800 flex items-center justify-between"
            >
              <div>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-xl font-black text-zinc-900 dark:text-zinc-100">
                    {word.kanji}
                  </span>
                  {word.kanji !== word.kana && (
                    <span className="text-xs font-semibold text-rose-500">
                      {word.kana}
                    </span>
                  )}
                </div>
                <div className="text-xs text-zinc-400 flex items-center gap-1.5 flex-wrap">
                  <span>[{word.romaji}]</span>
                  <span className="font-bold text-amber-600 dark:text-amber-400">[{kanaToHangul(word.kana)}]</span>
                </div>
                <div className="text-xs font-bold text-zinc-700 dark:text-zinc-200 mt-1">
                  {word.meaning}
                </div>
              </div>

              <button
                onClick={() => playJapaneseSpeech(word.kanji || word.kana)}
                className="p-2.5 rounded-xl bg-white dark:bg-zinc-800 text-rose-600 dark:text-rose-400 shadow-sm hover:scale-105 active:scale-95 transition-all"
                title="발음 듣기"
              >
                <Volume2 className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
