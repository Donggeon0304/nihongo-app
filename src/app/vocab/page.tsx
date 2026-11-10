'use client';

import React, { useState, useEffect, useMemo, useRef } from 'react';
import { ALL_VOCAB } from '@/data/vocabData';
import VocabCard from '@/components/VocabCard';
import { loadUserStats, toggleBookmark } from '@/lib/storage';
import { BookOpen, Bookmark, Filter, Flag, Search, ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react';

const PAGE_SIZE = 30;
const LAST_STUDIED_KEY = 'nihongo_vocab_last_studied';

// 전체 단어장에서의 고정 번호 맵 (필터와 무관)
const WORD_NUMBER_MAP = new Map<string, number>();
ALL_VOCAB.forEach((w, i) => WORD_NUMBER_MAP.set(w.id, i + 1));

// 급수 정렬 우선순위
const LEVEL_ORDER: Record<string, number> = { N5: 0, N4: 1, N3: 2, N2: 3, N1: 4 };
const CATEGORY_ORDER: Record<string, number> = {
  basic: 0, daily: 1, conversation: 2, travel: 3, food: 4,
  restaurant: 5, shopping: 6, entertainment: 7, business: 8, emotion: 9,
};

// 급수 → 카테고리 순으로 정렬된 전체 단어 (고정 번호도 재할당)
const SORTED_VOCAB = [...ALL_VOCAB].sort((a, b) => {
  const lvl = (LEVEL_ORDER[a.level] ?? 99) - (LEVEL_ORDER[b.level] ?? 99);
  if (lvl !== 0) return lvl;
  return (CATEGORY_ORDER[a.category] ?? 99) - (CATEGORY_ORDER[b.category] ?? 99);
});
// 정렬 후 고정 번호 재할당
const SORTED_NUMBER_MAP = new Map<string, number>();
SORTED_VOCAB.forEach((w, i) => SORTED_NUMBER_MAP.set(w.id, i + 1));

export default function VocabPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLevel, setSelectedLevel] = useState<string>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [onlyBookmarks, setOnlyBookmarks] = useState(false);
  const [bookmarks, setBookmarks] = useState<string[]>([]);
  const [showHangul, setShowHangul] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [lastStudied, setLastStudied] = useState<{ id: string; number: number; kanji: string; kana: string; meaning: string } | null>(null);
  const isInitialMount = useRef(true);

  // 초기 로드
  useEffect(() => {
    const stats = loadUserStats();
    setBookmarks(stats.bookmarks || []);

    // 학습 마커 복원
    try {
      const saved = localStorage.getItem(LAST_STUDIED_KEY);
      if (saved) setLastStudied(JSON.parse(saved));
    } catch (e) {}

    setTimeout(() => { isInitialMount.current = false; }, 100);
  }, []);

  // 필터/검색 변경 시 1페이지로 리셋 (초기 마운트 제외)
  useEffect(() => {
    if (!isInitialMount.current) setCurrentPage(1);
  }, [searchQuery, selectedLevel, selectedCategory, onlyBookmarks]);

  const handleToggleBookmark = (id: string) => {
    const isNowBookmarked = toggleBookmark(id);
    setBookmarks((prev) =>
      isNowBookmarked ? [...prev, id] : prev.filter((bId) => bId !== id)
    );
  };

  const filteredWords = useMemo(() => {
    return SORTED_VOCAB.filter((word) => {
      if (selectedLevel !== 'all' && word.level !== selectedLevel) return false;
      if (selectedCategory !== 'all' && word.category !== selectedCategory) return false;
      if (onlyBookmarks && !bookmarks.includes(word.id)) return false;
      if (searchQuery.trim() !== '') {
        const query = searchQuery.trim().toLowerCase();
        return (
          word.kanji.toLowerCase().includes(query) ||
          word.kana.toLowerCase().includes(query) ||
          word.romaji.toLowerCase().includes(query) ||
          word.meaning.toLowerCase().includes(query)
        );
      }
      return true;
    });
  }, [selectedLevel, selectedCategory, onlyBookmarks, bookmarks, searchQuery]);

  const totalPages = Math.max(1, Math.ceil(filteredWords.length / PAGE_SIZE));
  const safeCurrentPage = Math.min(currentPage, totalPages);
  const startIdx = (safeCurrentPage - 1) * PAGE_SIZE;
  const endIdx = Math.min(startIdx + PAGE_SIZE, filteredWords.length);
  const currentWords = filteredWords.slice(startIdx, endIdx);

  // 🚩 단어에 학습 마커 꽂기/빼기
  const handleMarkLastStudied = (id: string, number: number) => {
    if (lastStudied?.id === id) {
      // 이미 꽂혀있으면 빼기
      setLastStudied(null);
      localStorage.removeItem(LAST_STUDIED_KEY);
    } else {
      const word = SORTED_VOCAB.find(w => w.id === id);
      const marker = { id, number, kanji: word?.kanji || '', kana: word?.kana || '', meaning: word?.meaning || '' };
      setLastStudied(marker);
      localStorage.setItem(LAST_STUDIED_KEY, JSON.stringify(marker));
    }
  };

  // 🚩 마커 단어로 이동
  const handleGoToLastStudied = () => {
    if (!lastStudied) return;
    // 필터 초기화
    setSelectedLevel('all');
    setSelectedCategory('all');
    setOnlyBookmarks(false);
    setSearchQuery('');
    setTimeout(() => {
      // 정렬된 전체 목록에서의 인덱스 찾기
      const idx = SORTED_VOCAB.findIndex(w => w.id === lastStudied.id);
      if (idx >= 0) {
        const targetPage = Math.floor(idx / PAGE_SIZE) + 1;
        setCurrentPage(targetPage);
        // 페이지 렌더 후 해당 카드로 스크롤
        setTimeout(() => {
          const el = document.getElementById(`word-${lastStudied.id}`);
          if (el) {
            el.scrollIntoView({ block: 'center' });
            // 깜빡임 효과로 어떤 카드인지 알려주기
            el.animate([
              { boxShadow: '0 0 0 4px rgba(244,63,94,0.5)' },
              { boxShadow: '0 0 0 0px rgba(244,63,94,0)' },
            ], { duration: 1200, iterations: 2 });
          }
        }, 100);
      }
    }, 50);
  };

  // 페이지 이동
  const goToPage = (page: number) => {
    setCurrentPage(Math.max(1, Math.min(page, totalPages)));
    window.scrollTo(0, 0);
  };

  // 페이지 번호 버튼 생성 (최대 7개)
  const getPageNumbers = (): number[] => {
    const pages: number[] = [];
    const maxVisible = 7;
    let start = Math.max(1, safeCurrentPage - Math.floor(maxVisible / 2));
    let end = Math.min(totalPages, start + maxVisible - 1);
    if (end - start + 1 < maxVisible) start = Math.max(1, end - maxVisible + 1);
    for (let i = start; i <= end; i++) pages.push(i);
    return pages;
  };

  const levels = ['all', 'N5', 'N4', 'N3', 'N2', 'N1'];
  const categories = [
    { key: 'all', name: '전체 분야' },
    { key: 'basic', name: '기초 필수' },
    { key: 'daily', name: '일상 회화' },
    { key: 'conversation', name: '대화/소통' },
    { key: 'travel', name: '여행/공항' },
    { key: 'food', name: '음식/식당' },
    { key: 'restaurant', name: '주문/식당' },
    { key: 'shopping', name: '쇼핑/마트' },
    { key: 'entertainment', name: '엔터/문화' },
    { key: 'business', name: '비즈니스' },
    { key: 'emotion', name: '감정/심리' },
  ];


  return (
    <div className="space-y-6">
      {/* 타이틀 */}
      <div className="pb-4 border-b border-zinc-200 dark:border-zinc-800">
        <h1 className="text-2xl md:text-3xl font-black flex items-center gap-2.5">
          <BookOpen className="w-7 h-7 text-rose-500" />
          일본어 단어장 (語彙)
        </h1>
        <p className="text-sm text-zinc-500 mt-1">
          JLPT 급수별 필수 어휘부터 여행, 식당, 일상 회화 단어까지 후리가나와 예문으로 학습하세요.
        </p>
      </div>

      {/* 🚩 학습 마커 배너: 마킹한 단어가 있을 때 표시 */}
      {lastStudied && (
        <button
          onClick={handleGoToLastStudied}
          className="w-full flex items-center justify-between px-5 py-3.5 rounded-2xl bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-800 text-rose-800 dark:text-rose-200 hover:bg-rose-100 dark:hover:bg-rose-950/50 active:scale-[0.99] transition-all"
        >
          <div className="flex items-center gap-3">
            <Flag className="w-5 h-5 text-rose-500 fill-rose-500" />
            <div className="text-left">
              <div className="font-bold text-sm">🚩 이어서 학습하기</div>
              <div className="text-xs text-rose-600 dark:text-rose-400">
                #{String(lastStudied.number).padStart(4, '0')} {lastStudied.kanji}({lastStudied.kana}) · {lastStudied.meaning}
              </div>
            </div>
          </div>
          <ChevronRight className="w-5 h-5 text-rose-400" />
        </button>
      )}

      {/* 필터 & 검색 바 */}
      <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-5 shadow-sm space-y-4">
        <div className="relative">
          <Search className="w-5 h-5 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="한자, 히라가나, 한국어 뜻 검색... (예: 食べる, 물, 여행, eki)"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-4 py-3 rounded-xl bg-zinc-50 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700 text-sm focus:outline-none focus:ring-2 focus:ring-rose-500 transition-all"
          />
        </div>

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pt-2">
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="text-xs font-bold text-zinc-400 mr-1 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5" />
              급수:
            </span>
            {levels.map((lvl) => (
              <button
                key={lvl}
                onClick={() => setSelectedLevel(lvl)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  selectedLevel === lvl
                    ? 'bg-rose-500 text-white shadow-sm'
                    : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200'
                }`}
              >
                {lvl === 'all' ? '전체 급수' : lvl}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 focus:outline-none"
            >
              {categories.map((c) => (
                <option key={c.key} value={c.key}>{c.name}</option>
              ))}
            </select>

            <button
              onClick={() => setOnlyBookmarks(!onlyBookmarks)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                onlyBookmarks
                  ? 'bg-amber-500 text-white shadow-sm'
                  : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200'
              }`}
            >
              <Bookmark className="w-3.5 h-3.5 fill-current" />
              내 단어장만 ({bookmarks.length})
            </button>

            <button
              onClick={() => setShowHangul(!showHangul)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all border ${
                showHangul
                  ? 'bg-amber-50 dark:bg-amber-950/40 border-amber-300 dark:border-amber-800 text-amber-800 dark:text-amber-300 shadow-sm'
                  : 'bg-zinc-100 dark:bg-zinc-800 border-transparent text-zinc-500 hover:bg-zinc-200'
              }`}
              title="글자를 몰라도 회화를 배울 수 있도록 한글 발음을 표기합니다"
            >
              <span>{showHangul ? '한글 발음: 켜짐 🟢' : '한글 발음: 꺼짐'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* 단어 통계 */}
      <div className="flex items-center justify-between px-1">
        <span className="text-xs text-zinc-500">
          조회 결과:{' '}
          <strong className="text-zinc-900 dark:text-zinc-100 font-bold">{filteredWords.length}</strong>개 단어 ·{' '}
          <strong className="text-rose-600 dark:text-rose-400 font-bold">{startIdx + 1}~{endIdx}</strong>번 표시 중
        </span>
        <span className="text-[11px] text-zinc-400">{safeCurrentPage} / {totalPages} 페이지</span>
      </div>

      {/* 단어 그리드 */}
      {currentWords.length > 0 ? (
        <div className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {currentWords.map((word) => {
              const fixedNumber = SORTED_NUMBER_MAP.get(word.id) || 0;
              return (
                <VocabCard
                  key={word.id}
                  word={word}
                  isBookmarked={bookmarks.includes(word.id)}
                  onToggleBookmark={handleToggleBookmark}
                  showHangul={showHangul}
                  wordNumber={fixedNumber}
                  isLastStudied={lastStudied?.id === word.id}
                  onMarkLastStudied={handleMarkLastStudied}
                />
              );
            })}
          </div>

          {/* 페이지네이션 */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-1.5 pt-2 pb-4 flex-wrap">
              <button onClick={() => goToPage(1)} disabled={safeCurrentPage === 1}
                className="p-2 rounded-lg bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-300 disabled:opacity-30 disabled:cursor-not-allowed hover:border-rose-400 transition-all" title="처음">
                <ChevronsLeft className="w-4 h-4" />
              </button>
              <button onClick={() => goToPage(safeCurrentPage - 1)} disabled={safeCurrentPage === 1}
                className="p-2 rounded-lg bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-300 disabled:opacity-30 disabled:cursor-not-allowed hover:border-rose-400 transition-all" title="이전">
                <ChevronLeft className="w-4 h-4" />
              </button>

              {getPageNumbers().map((pageNum) => (
                <button
                  key={pageNum}
                  onClick={() => goToPage(pageNum)}
                  className={`min-w-[2.5rem] h-10 rounded-lg text-sm font-bold transition-all relative ${
                    pageNum === safeCurrentPage
                      ? 'bg-rose-500 text-white shadow-sm'
                      : 'bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-300 hover:border-rose-400 hover:text-rose-500'
                  }`}
                >
                  {pageNum}
                </button>
              ))}

              <button onClick={() => goToPage(safeCurrentPage + 1)} disabled={safeCurrentPage === totalPages}
                className="p-2 rounded-lg bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-300 disabled:opacity-30 disabled:cursor-not-allowed hover:border-rose-400 transition-all" title="다음">
                <ChevronRight className="w-4 h-4" />
              </button>
              <button onClick={() => goToPage(totalPages)} disabled={safeCurrentPage === totalPages}
                className="p-2 rounded-lg bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-300 disabled:opacity-30 disabled:cursor-not-allowed hover:border-rose-400 transition-all" title="끝">
                <ChevronsRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-12 text-center">
          <BookOpen className="w-10 h-10 text-zinc-300 mx-auto mb-3" />
          <p className="text-zinc-500 font-medium">검색 조건에 맞는 단어가 없습니다.</p>
          <button
            onClick={() => { setSearchQuery(''); setSelectedLevel('all'); setSelectedCategory('all'); setOnlyBookmarks(false); }}
            className="mt-4 px-4 py-2 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-xs font-bold text-zinc-600 dark:text-zinc-300 hover:bg-zinc-200"
          >
            필터 초기화
          </button>
        </div>
      )}
    </div>
  );
}
