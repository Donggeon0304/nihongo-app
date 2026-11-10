'use client';

import React from 'react';
import { WordItem } from '@/data/vocabData';
import { playJapaneseSpeech } from '@/lib/speech';
import { kanaToHangul } from '@/lib/kanaToHangul';
import { Bookmark, Volume2 } from 'lucide-react';

interface VocabCardProps {
  word: WordItem;
  isBookmarked: boolean;
  onToggleBookmark: (id: string) => void;
  showHangul?: boolean;
}

const LEVEL_COLORS: Record<string, string> = {
  N5: 'bg-emerald-50 text-emerald-600 border-emerald-200 dark:bg-emerald-950/40 dark:border-emerald-800 dark:text-emerald-300',
  N4: 'bg-blue-50 text-blue-600 border-blue-200 dark:bg-blue-950/40 dark:border-blue-800 dark:text-blue-300',
  N3: 'bg-purple-50 text-purple-600 border-purple-200 dark:bg-purple-950/40 dark:border-purple-800 dark:text-purple-300',
  N2: 'bg-amber-50 text-amber-600 border-amber-200 dark:bg-amber-950/40 dark:border-amber-800 dark:text-amber-300',
  N1: 'bg-rose-50 text-rose-600 border-rose-200 dark:bg-rose-950/40 dark:border-rose-800 dark:text-rose-300',
};

const CATEGORY_NAMES: Record<string, string> = {
  basic: '기초',
  daily: '일상',
  travel: '여행',
  food: '음식/식당',
  shopping: '쇼핑',
  business: '비즈니스',
  emotion: '감정/상태',
};

export default function VocabCard({
  word,
  isBookmarked,
  onToggleBookmark,
  showHangul = true,
}: VocabCardProps) {
  const handlePlayWord = () => {
    playJapaneseSpeech(word.kanji || word.kana);
  };

  const hangulReading = kanaToHangul(word.kana);
  const exampleHangulReading = word.example ? kanaToHangul(word.example.reading) : '';

  const handlePlayExample = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (word.example) {
      playJapaneseSpeech(word.example.japanese, 0.85);
    }
  };

  return (
    <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-5 hover:border-zinc-300 dark:hover:border-zinc-700 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
      <div>
        {/* 상단 뱃지 & 북마크 */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-1.5">
            <span
              className={`px-2 py-0.5 rounded-md text-[11px] font-bold border ${
                LEVEL_COLORS[word.level] || 'bg-zinc-100 text-zinc-600'
              }`}
            >
              {word.level}
            </span>
            <span className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-500">
              {CATEGORY_NAMES[word.category] || word.category}
            </span>
          </div>

          <button
            onClick={() => onToggleBookmark(word.id)}
            className="p-1.5 rounded-lg text-zinc-300 hover:text-amber-500 dark:hover:text-amber-400 transition-colors"
            title="북마크"
          >
            <Bookmark
              className={`w-4 h-4 ${
                isBookmarked ? 'fill-amber-500 text-amber-500' : ''
              }`}
            />
          </button>
        </div>

        {/* 단어 본문 & 후리가나 */}
        <div className="flex items-baseline gap-2 mb-1.5 flex-wrap">
          <h3 className="text-2xl font-black text-zinc-900 dark:text-zinc-100">
            {word.kanji}
          </h3>
          {word.kanji !== word.kana && (
            <span className="text-sm font-semibold text-rose-500">
              {word.kana}
            </span>
          )}

          {/* 왕초보를 위한 친절한 한글 발음 뱃지 */}
          {showHangul && (
            <span className="px-2 py-0.5 rounded-lg bg-amber-50 dark:bg-amber-950/40 border border-amber-200/80 dark:border-amber-800/80 text-amber-800 dark:text-amber-300 font-black text-xs">
              [{hangulReading}]
            </span>
          )}
        </div>

        {/* 로마자 발음 및 한국어 뜻 */}
        <div className="text-xs text-zinc-400 mb-2">[{word.romaji}]</div>
        <div className="text-base font-bold text-zinc-800 dark:text-zinc-100 mb-4">
          {word.meaning}
        </div>

        {/* 예문 영역 */}
        {word.example && (
          <div className="p-3 rounded-xl bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-100 dark:border-zinc-800 text-xs space-y-1">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-zinc-800 dark:text-zinc-200">
                {word.example.japanese}
              </span>
              <button
                onClick={handlePlayExample}
                className="p-1 hover:text-rose-500 text-zinc-400 transition-colors"
                title="예문 발음 듣기"
              >
                <Volume2 className="w-3.5 h-3.5" />
              </button>
            </div>
            <div className="text-[11px] text-zinc-400">
              {word.example.reading}
            </div>
            {/* 예문 한글 발음 (글자 모르는 사람도 읽을 수 있음) */}
            {showHangul && (
              <div className="text-[11px] font-bold text-amber-600 dark:text-amber-400">
                발음: {exampleHangulReading}
              </div>
            )}
            <div className="text-[11px] text-zinc-500 dark:text-zinc-400 font-medium pt-0.5">
              {word.example.korean}
            </div>
          </div>
        )}
      </div>

      {/* 발음 듣기 버튼 */}
      <div className="mt-4 pt-3 border-t border-zinc-100 dark:border-zinc-800/80 flex items-center justify-between">
        <button
          onClick={handlePlayWord}
          className="flex items-center gap-1.5 text-xs font-bold text-rose-600 dark:text-rose-400 hover:text-rose-700 active:scale-95 transition-all"
        >
          <Volume2 className="w-4 h-4" />
          원어민 발음 듣기
        </button>
      </div>
    </div>
  );
}
