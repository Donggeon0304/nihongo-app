'use client';

import React, { useState } from 'react';
import KanaPractice from '@/components/KanaPractice';
import KanaTable from '@/components/KanaTable';
import { Languages, Table, Shuffle } from 'lucide-react';

export default function KanaPage() {
  const [kanaMode, setKanaMode] = useState<'hiragana' | 'katakana'>('hiragana');
  const [viewTab, setViewTab] = useState<'practice' | 'table'>('practice');

  return (
    <div className="space-y-6">
      {/* 타이틀 및 탭 */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-zinc-200 dark:border-zinc-800">
        <div>
          <h1 className="text-2xl md:text-3xl font-black flex items-center gap-2.5">
            <Languages className="w-7 h-7 text-rose-500" />
            카나(仮名) 훈련소
          </h1>
          <p className="text-sm text-zinc-500 mt-1">
            히라가나와 가타카나를 행별로 골라 집중 훈련하고, 직접 읽어보며 마스터하세요.
          </p>
        </div>

        {/* 히라가나 / 가타카나 전환 스위치 */}
        <div className="flex items-center gap-2">
          <div className="p-1 bg-zinc-100 dark:bg-zinc-800 rounded-xl flex">
            <button
              onClick={() => setKanaMode('hiragana')}
              className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${
                kanaMode === 'hiragana'
                  ? 'bg-rose-500 text-white shadow-sm'
                  : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900'
              }`}
            >
              히라가나 (あ)
            </button>
            <button
              onClick={() => setKanaMode('katakana')}
              className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${
                kanaMode === 'katakana'
                  ? 'bg-rose-500 text-white shadow-sm'
                  : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900'
              }`}
            >
              가타카나 (ア)
            </button>
          </div>
        </div>
      </div>

      {/* 서브 뷰 전환: 맞춤 훈련 vs 50음도 전체 표 */}
      <div className="flex gap-2">
        <button
          onClick={() => setViewTab('practice')}
          className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
            viewTab === 'practice'
              ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 shadow-sm'
              : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-500 hover:text-zinc-900'
          }`}
        >
          <Shuffle className="w-3.5 h-3.5" />
          행(行) 선택 맞춤 랜덤 훈련
        </button>
        <button
          onClick={() => setViewTab('table')}
          className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
            viewTab === 'table'
              ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 shadow-sm'
              : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-500 hover:text-zinc-900'
          }`}
        >
          <Table className="w-3.5 h-3.5" />
          50음도 전체 표 보기
        </button>
      </div>

      {/* 컨텐츠 영역 */}
      {viewTab === 'practice' ? (
        <KanaPractice mode={kanaMode} />
      ) : (
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-3 sm:p-6 shadow-sm">
          <KanaTable mode={kanaMode} />
        </div>
      )}
    </div>
  );
}
