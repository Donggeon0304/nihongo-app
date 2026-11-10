'use client';

import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { VOCAB_DATA, WordItem } from '@/data/vocabData';
import VocabCard from '@/components/VocabCard';
import { loadUserStats, toggleBookmark } from '@/lib/storage';
import { BookOpen, Bookmark, Filter, Search, ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, PlayCircle } from 'lucide-react';

const PAGE_SIZE = 30;
const LAST_PAGE_KEY = 'nihongo_vocab_last_page';
const LAST_FILTER_KEY = 'nihongo_vocab_last_filter';

export default function VocabPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLevel, setSelectedLevel] = useState<string>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [onlyBookmarks, setOnlyBookmarks] = useState(false);
  const [bookmarks, setBookmarks] = useState<string[]>([]);
  const [showHangul, setShowHangul] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [lastSavedPage, setLastSavedPage] = useState<number | null>(null);
  const [lastSavedFilter, setLastSavedFilter] = useState<string | null>(null);

  // 초기 로드: 북마크 & 마지막 학습 위치
  useEffect(() => {
    const stats = loadUserStats();
    setBookmarks(stats.bookmarks || []);

    // 마지막 학습 위치 복원
    try {
      const savedPage = localStorage.getItem(LAST_PAGE_KEY);
      const savedFilter = localStorage.getItem(LAST_FILTER_KEY);
      if (savedPage) {
        const pageNum = parseInt(savedPage, 10);
        setLastSavedPage(pageNum);
        setLastSavedFilter(savedFilter || '전체');
      }
    } catch (e) {}
  }, []);

  // 필터/검색 변경 시 1페이지로 리셋
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedLevel, selectedCategory, onlyBookmarks]);

  // 현재 페이지 변경 시 마지막 위치 자동 저장
  useEffect(() => {
    if (currentPage > 0) {
      try {
        localStorage.setItem(LAST_PAGE_KEY, String(currentPage));
        const filterLabel = selectedLevel === 'all' ? '전체' : selectedLevel;
        localStorage.setItem(LAST_FILTER_KEY, filterLabel);
      } catch (e) {}
    }
  }, [currentPage, selectedLevel]);

  const handleToggleBookmark = (id: string) => {
    const isNowBookmarked = toggleBookmark(id);
    setBookmarks((prev) =>
      isNowBookmarked ? [...prev, id] : prev.filter((bId) => bId !== id)
    );
  };

  // 필터링 로직
  const filteredWords = useMemo(() => {
    return VOCAB_DATA.filter((word) => {
      if (selectedLevel !== 'all' && word.level !== selectedLevel) return false;
      if (selectedCategory !== 'all' && word.category !== selectedCategory) return false;
      if (onlyBookmarks && !bookmarks.includes(word.id)) return false;
      if (searchQuery.trim() !== '') {
        const query = searchQuery.trim().toLowerCase();
        const matchKanji = word.kanji.toLowerCase().includes(query);
        const matchKana = word.kana.toLowerCase().includes(query);
        const matchRomaji = word.romaji.toLowerCase().includes(query);
        const matchMeaning = word.meaning.toLowerCase().includes(query);
        return matchKanji || matchKana || matchRomaji || matchMeaning;
      }
      return true;
    });
  }, [selectedLevel, selectedCategory, onlyBookmarks, bookmarks, searchQuery]);

  const totalPages = Math.max(1, Math.ceil(filteredWords.length / PAGE_SIZE));
  const safeCurrentPage = Math.min(currentPage, totalPages);
  const startIdx = (safeCurrentPage - 1) * PAGE_SIZE;
  const endIdx = Math.min(startIdx + PAGE_SIZE, filteredWords.length);
  const currentWords = filteredWords.slice(startIdx, endIdx);

  // 이어서 학습하기
  const handleResumeLearning = useCallback(() => {
    if (lastSavedPage) {
      // 필터가 전체일 때만 바로 이동 (다른 필터 상태였다면 리셋)
      setSelectedLevel('all');
      setSelectedCategory('all');
      setOnlyBookmarks(false);
      setSearchQuery('');
      // 약간의 딜레이 후 페이지 이동 (필터 리셋 반영 대기)
      setTimeout(() => {
        const maxPage = Math.ceil(VOCAB_DATA.length / PAGE_SIZE);
        setCurrentPage(Math.min(lastSavedPage, maxPage));
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 50);
    }
  }, [lastSavedPage]);

  // 페이지 이동
  const goToPage = (page: number) => {
    const target = Math.max(1, Math.min(page, totalPages));
    setCurrentPage(target);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // 페이지 번호 버튼 생성 (최대 7개 표시)
  const getPageNumbers = (): number[] => {
    const pages: number[] = [];
    const maxVisible = 7;
    let start = Math.max(1, safeCurrentPage - Math.floor(maxVisible / 2));
    let end = Math.min(totalPages, start + maxVisible - 1);
    if (end - start + 1 < maxVisible) {
      start = Math.max(1, end - maxVisible + 1);
    }
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    return pages;
  };

  const levels = ['all', 'N5', 'N4', 'N3', 'N2', 'N1'];
  const categories = [
    { key: 'all', name: '전체 분야' },
    { key: 'basic', name: '기초 필수' },
    { key: 'daily', name: '일상 회화' },
    { key: 'travel', name: '여행/공항' },
    { key: 'food', name: '음식/식당' },
    { key: 'shopping', name: '쇼핑/마트' },
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

      {/* 이어서 학습하기 배너 */}
      {lastSavedPage && lastSavedPage > 1 && (
        <button
          onClick={handleResumeLearning}
          className="w-full flex items-center justify-between px-5 py-4 rounded-2xl bg-gradient-to-r from-rose-500 to-amber-500 text-white shadow-lg hover:shadow-xl active:scale-[0.99] transition-all"
        >
          <div className="flex items-center gap-3">
            <PlayCircle className="w-6 h-6" />
            <div className="text-left">
              <div className="font-bold text-sm">이어서 학습하기</div>
              <div className="text-xs text-rose-100">
                지난번 {lastSavedFilter || '전체'} · {lastSavedPage}페이지 ({(lastSavedPage - 1) * PAGE_SIZE + 1}~{lastSavedPage * PAGE_SIZE}번) 부터 이어서
              </div>
            </div>
          </div>
          <ChevronRight className="w-5 h-5" />
        </button>
      )}

      {/* 필터 & 검색 바 */}
      <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-5 shadow-sm space-y-4">
        {/* 검색창 */}
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

        {/* 필터 칩스 */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pt-2">
          {/* 급수 선택 */}
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

          {/* 카테고리 & 북마크 필터 */}
          <div className="flex items-center gap-2 flex-wrap">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 focus:outline-none"
            >
              {categories.map((c) => (
                <option key={c.key} value={c.key}>
                  {c.name}
                </option>
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

            {/* 왕초보 한글 발음 모드 토글 */}
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

      {/* 단어 통계 + 진도 표시 */}
      <div className="flex items-center justify-between px-1">
        <span className="text-xs text-zinc-500">
          조회 결과:{' '}
          <strong className="text-zinc-900 dark:text-zinc-100 font-bold">
            {filteredWords.length}
          </strong>
          개 단어 ·{' '}
          <strong className="text-rose-600 dark:text-rose-400 font-bold">
            {startIdx + 1}~{endIdx}
          </strong>
          번 표시 중
        </span>
        <span className="text-[11px] text-zinc-400">
          {safeCurrentPage} / {totalPages} 페이지
        </span>
      </div>

      {/* 단어 그리드 */}
      {currentWords.length > 0 ? (
        <div className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {currentWords.map((word, idx) => (
              <VocabCard
                key={word.id}
                word={word}
                isBookmarked={bookmarks.includes(word.id)}
                onToggleBookmark={handleToggleBookmark}
                showHangul={showHangul}
              />
            ))}
          </div>

          {/* 페이지네이션 */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-1.5 pt-2 pb-4 flex-wrap">
              {/* 처음 */}
              <button
                onClick={() => goToPage(1)}
                disabled={safeCurrentPage === 1}
                className="p-2 rounded-lg bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-300 disabled:opacity-30 disabled:cursor-not-allowed hover:border-rose-400 transition-all"
                title="처음"
              >
                <ChevronsLeft className="w-4 h-4" />
              </button>

              {/* 이전 */}
              <button
                onClick={() => goToPage(safeCurrentPage - 1)}
                disabled={safeCurrentPage === 1}
                className="p-2 rounded-lg bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-300 disabled:opacity-30 disabled:cursor-not-allowed hover:border-rose-400 transition-all"
                title="이전"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              {/* 페이지 번호들 */}
              {getPageNumbers().map((pageNum) => (
                <button
                  key={pageNum}
                  onClick={() => goToPage(pageNum)}
                  className={`min-w-[2.5rem] h-10 rounded-lg text-sm font-bold transition-all ${
                    pageNum === safeCurrentPage
                      ? 'bg-rose-500 text-white shadow-sm'
                      : 'bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-300 hover:border-rose-400 hover:text-rose-500'
                  }`}
                >
                  {pageNum}
                </button>
              ))}

              {/* 다음 */}
              <button
                onClick={() => goToPage(safeCurrentPage + 1)}
                disabled={safeCurrentPage === totalPages}
                className="p-2 rounded-lg bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-300 disabled:opacity-30 disabled:cursor-not-allowed hover:border-rose-400 transition-all"
                title="다음"
              >
                <ChevronRight className="w-4 h-4" />
              </button>

              {/* 끝 */}
              <button
                onClick={() => goToPage(totalPages)}
                disabled={safeCurrentPage === totalPages}
                className="p-2 rounded-lg bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-300 disabled:opacity-30 disabled:cursor-not-allowed hover:border-rose-400 transition-all"
                title="끝"
              >
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
            onClick={() => {
              setSearchQuery('');
              setSelectedLevel('all');
              setSelectedCategory('all');
              setOnlyBookmarks(false);
            }}
            className="mt-4 px-4 py-2 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-xs font-bold text-zinc-600 dark:text-zinc-300 hover:bg-zinc-200"
          >
            필터 초기화
          </button>
        </div>
      )}
    </div>
  );
}
