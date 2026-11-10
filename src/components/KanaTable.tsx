'use client';

import React, { useState } from 'react';
import { KANA_DATA, KanaItem } from '@/data/kanaData';
import { playJapaneseSpeech } from '@/lib/speech';
import { Volume2, Eye, EyeOff } from 'lucide-react';

interface KanaTableProps {
  mode: 'hiragana' | 'katakana';
}

interface RowConfig {
  key: string;
  name: string;
  danKeys: (string | null)[]; // 5개 단 (a, i, u, e, o)에 대응하는 카나 id 또는 null(빈칸)
}

// 50음도 기본 행 구조 (가로 5단: 아단, 이단, 우단, 에단, 오단)
const SEION_ROW_LAYOUT: RowConfig[] = [
  { key: 'a', name: 'あ행', danKeys: ['a', 'i', 'u', 'e', 'o'] },
  { key: 'ka', name: 'か행', danKeys: ['ka', 'ki', 'ku', 'ke', 'ko'] },
  { key: 'sa', name: 'さ행', danKeys: ['sa', 'shi', 'su', 'se', 'so'] },
  { key: 'ta', name: 'た행', danKeys: ['ta', 'chi', 'tsu', 'te', 'to'] },
  { key: 'na', name: 'な행', danKeys: ['na', 'ni', 'nu', 'ne', 'no'] },
  { key: 'ha', name: 'は행', danKeys: ['ha', 'hi', 'fu', 'he', 'ho'] },
  { key: 'ma', name: 'ま행', danKeys: ['ma', 'mi', 'mu', 'me', 'mo'] },
  { key: 'ya', name: 'や행', danKeys: ['ya', null, 'yu', null, 'yo'] }, // 빈칸 유지
  { key: 'ra', name: 'ら행', danKeys: ['ra', 'ri', 'ru', 're', 'ro'] },
  { key: 'wa', name: 'わ행', danKeys: ['wa', null, 'wo', null, 'n'] }, // 빈칸 및 を, ん
];

// 탁음 행
const DAKUON_ROW_LAYOUT: RowConfig[] = [
  { key: 'ga', name: 'が행', danKeys: ['ga', 'gi', 'gu', 'ge', 'go'] },
  { key: 'za', name: 'ざ행', danKeys: ['za', 'ji', 'zu', 'ze', 'zo'] },
  { key: 'da', name: 'だ행', danKeys: ['da', 'di', 'du', 'de', 'do'] },
  { key: 'ba', name: 'ば행', danKeys: ['ba', 'bi', 'bu', 'be', 'bo'] },
];

// 반탁음 행
const HANDAKUON_ROW_LAYOUT: RowConfig[] = [
  { key: 'pa', name: 'ぱ행', danKeys: ['pa', 'pi', 'pu', 'pe', 'po'] },
];

export default function KanaTable({ mode }: KanaTableProps) {
  const [filterType, setFilterType] = useState<'seion' | 'dakuon' | 'handakuon'>('seion');
  const [hidePronunciation, setHidePronunciation] = useState<boolean>(false);

  const activeLayout =
    filterType === 'seion'
      ? SEION_ROW_LAYOUT
      : filterType === 'dakuon'
      ? DAKUON_ROW_LAYOUT
      : HANDAKUON_ROW_LAYOUT;

  // 카나 맵
  const kanaMap = new Map<string, KanaItem>();
  KANA_DATA.forEach((k) => kanaMap.set(k.id, k));

  const handlePlay = (item: KanaItem) => {
    const char = mode === 'hiragana' ? item.hiragana : item.katakana;
    playJapaneseSpeech(char);
  };

  const danLabels = ['あ단 (-a)', 'い단 (-i)', 'う단 (-u)', 'え단 (-e)', 'お단 (-o)'];

  return (
    <div className="space-y-5">
      {/* 컨트롤 바: 분류 선택 & 발음 숨기기 토글 버튼 */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-zinc-100 dark:border-zinc-800">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setFilterType('seion')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
              filterType === 'seion'
                ? 'bg-rose-500 text-white shadow-sm'
                : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200'
            }`}
          >
            기본 청음 (50음도)
          </button>
          <button
            onClick={() => setFilterType('dakuon')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
              filterType === 'dakuon'
                ? 'bg-rose-500 text-white shadow-sm'
                : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200'
            }`}
          >
            탁음 (が/ざ/だ/ば)
          </button>
          <button
            onClick={() => setFilterType('handakuon')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
              filterType === 'handakuon'
                ? 'bg-rose-500 text-white shadow-sm'
                : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200'
            }`}
          >
            반탁음 (ぱ)
          </button>
        </div>

        {/* 독창적인 학습 기능: 발음 숨기기 토글 버튼 */}
        <button
          onClick={() => setHidePronunciation(!hidePronunciation)}
          className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold border transition-all ${
            hidePronunciation
              ? 'bg-zinc-900 text-white border-zinc-900 dark:bg-zinc-100 dark:text-zinc-900 shadow-sm'
              : 'bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 border-zinc-300 dark:border-zinc-700 hover:border-zinc-400'
          }`}
          title="문자만 보고 읽는 연습을 할 때 유용합니다"
        >
          {hidePronunciation ? (
            <>
              <EyeOff className="w-4 h-4 text-rose-400" />
              <span>발음 숨김 활성화됨 (문자만 보기)</span>
            </>
          ) : (
            <>
              <Eye className="w-4 h-4 text-zinc-400" />
              <span>발음 숨기기 (자가 테스트 모드)</span>
            </>
          )}
        </button>
      </div>

      {/* 가로 나열 50음도 테이블 — 화면 크기에 맞게 유동적 */}
      <div className="space-y-1.5 sm:space-y-2">
        {/* 상단 단(段) 헤더 */}
        <div className="grid grid-cols-[40px_repeat(5,1fr)] sm:grid-cols-[80px_repeat(5,1fr)] gap-1 sm:gap-2 text-center text-[10px] sm:text-xs font-bold text-zinc-400 px-0.5 sm:px-1">
          <div>행</div>
          {['a', 'i', 'u', 'e', 'o'].map((dan) => (
            <div key={dan}>{dan}단</div>
          ))}
        </div>

        {/* 각 행 가로 정렬 */}
        {activeLayout.map((row) => (
          <div
            key={row.key}
            className="grid grid-cols-[40px_repeat(5,1fr)] sm:grid-cols-[80px_repeat(5,1fr)] gap-1 sm:gap-2 items-center"
          >
            {/* 행 이름 뱃지 */}
            <div className="h-12 sm:h-16 rounded-lg sm:rounded-xl bg-zinc-100 dark:bg-zinc-800/60 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center font-bold text-[10px] sm:text-xs text-zinc-700 dark:text-zinc-300">
              {row.name}
            </div>

            {/* 5개 단 가로 열 */}
            {row.danKeys.map((id, danIdx) => {
              if (!id) {
                // 야행, 와행의 빈자리
                return (
                  <div
                    key={`empty_${row.key}_${danIdx}`}
                    className="h-12 sm:h-16 rounded-lg sm:rounded-xl bg-zinc-50/40 dark:bg-zinc-900/40 border border-dashed border-zinc-200 dark:border-zinc-800/60"
                  />
                );
              }

              const item = kanaMap.get(id);
              if (!item) return <div key={id} className="h-12 sm:h-16" />;

              const char = mode === 'hiragana' ? item.hiragana : item.katakana;

              return (
                <button
                  key={item.id}
                  onClick={() => handlePlay(item)}
                  className="h-12 sm:h-16 flex flex-col items-center justify-center rounded-lg sm:rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-rose-400 dark:hover:border-rose-500 shadow-sm hover:shadow-md transition-all active:scale-95 group relative overflow-hidden"
                >
                  <span className="text-lg sm:text-2xl font-black text-zinc-800 dark:text-zinc-100 group-hover:text-rose-500 transition-colors">
                    {char}
                  </span>

                  {/* 발음 숨기기 상태에 따른 조건부 렌더링 */}
                  <div
                    className={`transition-opacity duration-200 ${
                      hidePronunciation
                        ? 'opacity-0 group-hover:opacity-100'
                        : 'opacity-100'
                    }`}
                  >
                    <div className="flex items-center gap-0.5 text-[9px] sm:text-[11px] font-semibold text-zinc-400">
                      <span>{item.romaji}</span>
                      <span className="text-[9px] sm:text-[10px] text-zinc-500">({item.korean})</span>
                    </div>
                  </div>

                  <div className="absolute top-1 right-1 sm:top-1.5 sm:right-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Volume2 className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-rose-500" />
                  </div>
                </button>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
