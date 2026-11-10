'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { VOCAB_DATA, WordItem } from '@/data/vocabData';
import VocabCard from '@/components/VocabCard';
import { loadUserStats, toggleBookmark } from '@/lib/storage';
import { BookOpen, Bookmark, Filter, Search, Sparkles } from 'lucide-react';

export default function VocabPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLevel, setSelectedLevel] = useState<string>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [onlyBookmarks, setOnlyBookmarks] = useState(false);
  const [bookmarks, setBookmarks] = useState<string[]>([]);
  const [showHangul, setShowHangul] = useState<boolean>(true); // 왕초보를 위한 한글 발음 표시 토글
  const [visibleCount, setVisibleCount] = useState<number>(30);

  useEffect(() => {
    const stats = loadUserStats();
    setBookmarks(stats.bookmarks || []);
  }, []);

  // 검색이나 필터가 바뀌면 노출 개수 30개로 리셋
  useEffect(() => {
    setVisibleCount(30);
  }, [searchQuery, selectedLevel, selectedCategory, onlyBookmarks]);

  const handleToggleBookmark = (id: string) => {
    const isNowBookmarked = toggleBookmark(id);
    setBookmarks((prev) =>
      isNowBookmarked ? [...prev, id] : prev.filter((bId) => bId !== id)
    );
  };

  // 필터링 로직
  const filteredWords = useMemo(() => {
    return VOCAB_DATA.filter((word) => {
      // 레벨 필터
      if (selectedLevel !== 'all' && word.level !== selectedLevel) return false;
      // 카테고리 필터
      if (selectedCategory !== 'all' && word.category !== selectedCategory) return false;
      // 북마크 필터
      if (onlyBookmarks && !bookmarks.includes(word.id)) return false;
      // 검색어 필터
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

      {/* 단어 통계 */}
      <div className="flex items-center justify-between px-1 text-xs text-zinc-500">
        <span>
          조회 결과:{' '}
          <strong className="text-zinc-900 dark:text-zinc-100 font-bold">
            {filteredWords.length}
          </strong>
          개 단어
        </span>
        <span className="text-[11px] text-zinc-400">
          💡 단어 카드의 스피커를 누르면 원어민 발음이 재생됩니다
        </span>
      </div>

      {/* 단어 그리드 */}
      {filteredWords.length > 0 ? (
        <div className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredWords.slice(0, visibleCount).map((word) => (
              <VocabCard
                key={word.id}
                word={word}
                isBookmarked={bookmarks.includes(word.id)}
                onToggleBookmark={handleToggleBookmark}
                showHangul={showHangul}
              />
            ))}
          </div>

          {/* 더 보기 버튼 */}
          {visibleCount < filteredWords.length && (
            <div className="text-center pt-2">
              <button
                onClick={() => setVisibleCount((prev) => prev + 30)}
                className="px-6 py-3 rounded-2xl bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-sm font-bold text-zinc-700 dark:text-zinc-200 hover:border-rose-400 hover:text-rose-500 shadow-sm transition-all"
              >
                단어 더 보기 (+30개) · ({Math.min(visibleCount, filteredWords.length)} / {filteredWords.length})
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
