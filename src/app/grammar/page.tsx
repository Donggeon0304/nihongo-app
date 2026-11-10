'use client';

import React, { useState, useMemo } from 'react';
import { GRAMMAR_DATA, GrammarItem } from '@/data/grammarData';
import { playJapaneseSpeech } from '@/lib/speech';
import { kanaToHangul } from '@/lib/kanaToHangul';
import {
  Sparkles,
  Volume2,
  Search,
  Layers,
  BookOpen,
  Lightbulb,
  CheckCircle2,
  ChevronRight,
  PanelLeftClose,
  PanelLeftOpen,
} from 'lucide-react';

const LEVEL_COLORS: Record<string, string> = {
  N5: 'bg-emerald-50 text-emerald-600 border-emerald-200 dark:bg-emerald-950/40 dark:border-emerald-800 dark:text-emerald-300',
  N4: 'bg-blue-50 text-blue-600 border-blue-200 dark:bg-blue-950/40 dark:border-blue-800 dark:text-blue-300',
  N3: 'bg-purple-50 text-purple-600 border-purple-200 dark:bg-purple-950/40 dark:border-purple-800 dark:text-purple-300',
  Travel: 'bg-amber-50 text-amber-600 border-amber-200 dark:bg-amber-950/40 dark:border-amber-800 dark:text-amber-300',
};

const CATEGORY_NAMES: Record<string, string> = {
  particle: '조사',
  verb: '동사 활용',
  adjective: '명사·형용사',
  expression: '핵심 회화 표현',
  travel: '여행 실전 패턴',
};

export default function GrammarPage() {
  const [selectedId, setSelectedId] = useState<string>(GRAMMAR_DATA[0]?.id || '');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);

  // 필터링된 문법 목록
  const filteredList = useMemo(() => {
    return GRAMMAR_DATA.filter((item) => {
      if (selectedCategory !== 'all' && item.category !== selectedCategory) return false;
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        const matchTitle = item.title.toLowerCase().includes(q);
        const matchSummary = item.summary.toLowerCase().includes(q);
        const matchFormula = item.formula.toLowerCase().includes(q);
        return matchTitle || matchSummary || matchFormula;
      }
      return true;
    });
  }, [selectedCategory, searchQuery]);

  // 현재 선택된 상세 문법 아이템
  const currentItem = useMemo(() => {
    return (
      GRAMMAR_DATA.find((item) => item.id === selectedId) ||
      filteredList[0] ||
      GRAMMAR_DATA[0]
    );
  }, [selectedId, filteredList]);

  return (
    <div className="space-y-6">
      {/* 타이틀 */}
      <div className="pb-4 border-b border-zinc-200 dark:border-zinc-800">
        <h1 className="text-2xl md:text-3xl font-black flex items-center gap-2.5">
          <Sparkles className="w-7 h-7 text-rose-500" />
          일본어 필수 문법 사전 (文法)
        </h1>
        <p className="text-sm text-zinc-500 mt-1">
          왼쪽 목록에서 원하는 문법을 클릭하여 핵심 공식, 상세 설명, 원어민 예문 발음을 한눈에 확인하세요.
        </p>
      </div>

      {/* 사이드바 Master-Detail 2열 레이아웃 */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* =========================================
            좌측: 문법 목록 사이드바 (4 cols / 축소 가능)
            ========================================= */}
        {isSidebarOpen && (
          <div className="lg:col-span-5 xl:col-span-4 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-4 shadow-sm space-y-4">
            {/* 사이드바 상단 바: 목록 수 & 사이드바 축소 버튼 */}
            <div className="flex items-center justify-between pb-2 border-b border-zinc-100 dark:border-zinc-800 px-1">
              <span className="text-xs font-bold text-zinc-500">
                문법 목록 ({filteredList.length})
              </span>
              <button
                onClick={() => setIsSidebarOpen(false)}
                className="flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-medium text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                title="사이드바 축소하기"
              >
                <PanelLeftClose className="w-3.5 h-3.5" />
                <span>목록 축소</span>
              </button>
            </div>

            {/* 검색창 */}
            <div className="relative">
              <Search className="w-4 h-4 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="문법 검색 (예: 조사, て형, たい, 수동...)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700 text-xs focus:outline-none focus:ring-2 focus:ring-rose-500"
              />
            </div>

          {/* 카테고리 칩스 */}
          <div className="flex gap-1 overflow-x-auto pb-1 scrollbar-none">
            {[
              { key: 'all', name: '전체' },
              { key: 'particle', name: '조사' },
              { key: 'verb', name: '동사' },
              { key: 'adjective', name: '형용사' },
              { key: 'expression', name: '표현' },
              { key: 'travel', name: '여행' },
            ].map((cat) => (
              <button
                key={cat.key}
                onClick={() => setSelectedCategory(cat.key)}
                className={`px-2.5 py-1.5 rounded-lg text-xs font-bold shrink-0 transition-all ${
                  selectedCategory === cat.key
                    ? 'bg-rose-500 text-white shadow-sm'
                    : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* 문법 목록 스크롤 뷰 */}
          <div className="space-y-1.5 max-h-[600px] overflow-y-auto pr-1">
            {filteredList.map((item) => {
              const isActive = currentItem?.id === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setSelectedId(item.id)}
                  className={`w-full text-left p-3 rounded-2xl border transition-all flex items-center justify-between ${
                    isActive
                      ? 'border-rose-500 bg-rose-50/70 dark:bg-rose-950/40 text-rose-900 dark:text-rose-200 shadow-sm'
                      : 'border-zinc-100 dark:border-zinc-800/80 bg-zinc-50/40 dark:bg-zinc-900/40 hover:border-zinc-200 hover:bg-zinc-50 dark:hover:bg-zinc-800/40'
                  }`}
                >
                  <div className="space-y-1 pr-2">
                    <div className="flex items-center gap-1.5">
                      <span
                        className={`px-1.5 py-0.5 rounded text-[10px] font-bold border ${
                          LEVEL_COLORS[item.level] || 'bg-zinc-100 text-zinc-600'
                        }`}
                      >
                        {item.level}
                      </span>
                      <span className="font-bold text-xs line-clamp-1">
                        {item.title}
                      </span>
                    </div>
                    <p className="text-[11px] text-zinc-400 line-clamp-1">
                      {item.summary}
                    </p>
                  </div>
                  <ChevronRight
                    className={`w-4 h-4 shrink-0 transition-transform ${
                      isActive ? 'text-rose-500 translate-x-0.5' : 'text-zinc-300'
                    }`}
                  />
                </button>
              );
            })}

            {filteredList.length === 0 && (
              <div className="py-8 text-center text-xs text-zinc-400">
                검색된 문법이 없습니다.
              </div>
            )}
          </div>
        </div>
      )}

      {/* =========================================
          우측: 선택된 문법 상세 뷰 (가변 컬럼)
          ========================================= */}
      <div
        className={`${
          isSidebarOpen
            ? 'lg:col-span-7 xl:col-span-8'
            : 'lg:col-span-12'
        } bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-6 md:p-8 shadow-sm space-y-6 transition-all`}
      >
        {currentItem ? (
          <>
            {/* 상단 헤더 & 사이드바 열기 버튼 */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  {!isSidebarOpen && (
                    <button
                      onClick={() => setIsSidebarOpen(true)}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-xs font-bold text-zinc-700 dark:text-zinc-200 hover:bg-zinc-200 transition-colors mr-1 shadow-sm"
                      title="사이드바 펼치기"
                    >
                      <PanelLeftOpen className="w-4 h-4 text-rose-500" />
                      <span>목록 펼치기</span>
                    </button>
                  )}
                  <span
                    className={`px-2.5 py-0.5 rounded-lg text-xs font-bold border ${
                      LEVEL_COLORS[currentItem.level]
                    }`}
                  >
                    {currentItem.level}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-lg text-xs font-semibold bg-zinc-100 dark:bg-zinc-800 text-zinc-500">
                    {CATEGORY_NAMES[currentItem.category] || currentItem.category}
                  </span>
                </div>
              </div>
              <h2 className="text-2xl font-black text-zinc-900 dark:text-zinc-100">
                {currentItem.title}
              </h2>
              <p className="text-sm text-zinc-500 mt-1">{currentItem.summary}</p>
            </div>

              {/* 핵심 공식 박스 */}
              <div className="p-4 rounded-2xl bg-amber-50/80 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900/60 flex items-start gap-3">
                <div className="w-8 h-8 rounded-xl bg-amber-500 text-white flex items-center justify-center shrink-0">
                  <Layers className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-amber-900 dark:text-amber-300">
                    핵심 공식 & 형태
                  </div>
                  <div className="text-sm font-black text-amber-800 dark:text-amber-100 mt-0.5">
                    {currentItem.formula}
                  </div>
                </div>
              </div>

              {/* 상세 설명 */}
              <div className="space-y-2">
                <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4 text-rose-500" />
                  문법 규칙 및 해설
                </h3>
                <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-100 dark:border-zinc-800 text-xs md:text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed whitespace-pre-line">
                  {currentItem.explanation}
                </div>
              </div>

              {/* 팁 / 주의점 (있을 경우) */}
              {currentItem.tips && (
                <div className="p-4 rounded-2xl bg-rose-50/60 dark:bg-rose-950/30 border border-rose-200/80 dark:border-rose-900/60 flex items-start gap-2.5 text-xs text-rose-900 dark:text-rose-200">
                  <Lightbulb className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{currentItem.tips}</span>
                </div>
              )}

              {/* 실전 예문 리스트 & 발음 재생 */}
              <div className="space-y-3 pt-2">
                <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-100 flex items-center justify-between">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    실전 회화 예문 (원어민 발음 지원)
                  </span>
                  <span className="text-xs text-zinc-400 font-normal">
                    스피커 버튼을 눌러 청취하세요
                  </span>
                </h3>

                <div className="space-y-2.5">
                  {currentItem.examples.map((ex, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-100 dark:border-zinc-800 flex items-center justify-between gap-3 group hover:border-zinc-200"
                    >
                      <div className="space-y-0.5">
                        <div className="text-sm font-black text-zinc-900 dark:text-zinc-100">
                          {ex.japanese}
                        </div>
                        <div className="text-xs text-rose-500 font-medium">
                          {ex.reading}
                        </div>
                        <div className="text-[11px] font-bold text-amber-600 dark:text-amber-400">
                          발음: [{kanaToHangul(ex.reading)}]
                        </div>
                        <div className="text-xs text-zinc-600 dark:text-zinc-300 font-medium pt-0.5">
                          {ex.korean}
                        </div>
                      </div>

                      <button
                        onClick={() => playJapaneseSpeech(ex.japanese, 0.85)}
                        className="p-3 rounded-xl bg-white dark:bg-zinc-800 text-rose-600 dark:text-rose-400 border border-zinc-200 dark:border-zinc-700 shadow-sm hover:scale-105 active:scale-95 transition-all shrink-0"
                        title="원어민 발음 듣기"
                      >
                        <Volume2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </>
          ) : (
            <div className="py-20 text-center text-zinc-400 text-sm">
              왼쪽 목록에서 문법 항목을 선택하세요.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
