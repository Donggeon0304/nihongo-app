'use client';

import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { KANA_DATA, KANA_ROWS, KanaItem } from '@/data/kanaData';
import { playJapaneseSpeech } from '@/lib/speech';
import { markAttendance } from '@/lib/storage';
import {
  RotateCcw,
  Volume2,
  CheckCircle2,
  XCircle,
  Sparkles,
  Shuffle,
  Eye,
  Layers,
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface KanaPracticeProps {
  mode: 'hiragana' | 'katakana';
}

export default function KanaPractice({ mode }: KanaPracticeProps) {
  // 기본 선택: 초급 필수 기본 5행 (아~나행 25자)
  const [selectedRowKeys, setSelectedRowKeys] = useState<string[]>([
    'a',
    'ka',
    'sa',
    'ta',
    'na',
  ]);
  const [practiceType, setPracticeType] = useState<'flashcard' | 'quiz'>('flashcard');
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  // 훈련 큐 & 진행 상태
  const [queue, setQueue] = useState<KanaItem[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isFlipped, setIsFlipped] = useState<boolean>(false); // 플래시카드 뒤집힘 여부
  const [enableTransition, setEnableTransition] = useState<boolean>(true); // 탭할 때만 회전 애니메이션 적용
  const [quizOptions, setQuizOptions] = useState<string[]>([]);
  const [quizSelected, setQuizSelected] = useState<string | null>(null);
  const [correctCount, setCorrectCount] = useState<number>(0);
  const [finished, setFinished] = useState<boolean>(false);

  // 선택된 행에 해당하는 카나 문자 필터링
  const availableChars = useMemo(() => {
    return KANA_DATA.filter((k) => selectedRowKeys.includes(k.rowKey));
  }, [selectedRowKeys]);

  // 행 토글
  const toggleRow = (key: string) => {
    setSelectedRowKeys((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]
    );
  };

  // 표준적이고 직관적인 퍼블릭 프리셋 목록
  const selectAllRows = () => {
    setSelectedRowKeys(KANA_ROWS.map((r) => r.key));
  };

  const clearAllRows = () => {
    setSelectedRowKeys([]);
  };

  const selectBasicFive = () => {
    // 초반 5행 (아, 카, 사, 타, 나)
    setSelectedRowKeys(['a', 'ka', 'sa', 'ta', 'na']);
  };

  const selectLatterFive = () => {
    // 후반 5행 (하, 마, 야, 라, 와)
    setSelectedRowKeys(['ha', 'ma', 'ya', 'ra', 'wa']);
  };

  const selectSeionAll = () => {
    // 기본 청음 10행 전체 (50음도 46문자)
    setSelectedRowKeys(['a', 'ka', 'sa', 'ta', 'na', 'ha', 'ma', 'ya', 'ra', 'wa']);
  };

  const selectDakuonAll = () => {
    // 탁음 및 반탁음 전체
    setSelectedRowKeys(['ga', 'za', 'da', 'ba', 'pa']);
  };

  // 4지선다 옵션 생성 함수
  const generateQuizOptions = useCallback((target: KanaItem) => {
    const wrongPool = KANA_DATA.filter((k) => k.id !== target.id);
    const shuffledWrong = [...wrongPool].sort(() => 0.5 - Math.random()).slice(0, 3);
    const options = [
      `${target.romaji} (${target.korean})`,
      ...shuffledWrong.map((k) => `${k.romaji} (${k.korean})`),
    ].sort(() => 0.5 - Math.random());
    setQuizOptions(options);
  }, []);

  // 훈련 시작 / 재시작
  const startPractice = useCallback(() => {
    if (availableChars.length === 0) return;

    // 무작위 셔플
    const shuffled = [...availableChars].sort(() => 0.5 - Math.random());
    setQueue(shuffled);
    setCurrentIndex(0);
    setIsFlipped(false);
    setEnableTransition(true);
    setQuizSelected(null);
    setCorrectCount(0);
    setFinished(false);
    setIsPlaying(true);

    if (practiceType === 'quiz') {
      generateQuizOptions(shuffled[0]);
    }
  }, [availableChars, practiceType, generateQuizOptions]);

  // 현재 아이템
  const currentItem = queue[currentIndex] || null;
  const currentChar = currentItem
    ? mode === 'hiragana'
      ? currentItem.hiragana
      : currentItem.katakana
    : '';

  // 플래시카드 뒤집기 & 음성 재생 (탭할 때만 부드러운 회전 활성화)
  const flipCard = () => {
    setEnableTransition(true);
    if (!isFlipped && currentItem) {
      playJapaneseSpeech(currentChar);
    }
    setIsFlipped(!isFlipped);
  };

  // 다음 카드로 이동 (회전 없이 즉각 앞면으로 전환)
  const nextItem = () => {
    if (currentIndex + 1 >= queue.length) {
      setFinished(true);
      markAttendance(); // 훈련 완료 시 출석체크
      confetti({ particleCount: 70, spread: 60, origin: { y: 0.7 } });
    } else {
      const nextIdx = currentIndex + 1;
      // 다음 문자로 넘어갈 때는 회전 애니메이션을 끄고 즉각 앞면으로 표시
      setEnableTransition(false);
      setIsFlipped(false);
      setCurrentIndex(nextIdx);
      setQuizSelected(null);

      // 다음 탭 동작을 위해 트랜지션 복구
      setTimeout(() => {
        setEnableTransition(true);
      }, 50);

      if (practiceType === 'quiz') {
        generateQuizOptions(queue[nextIdx]);
      }
    }
  };

  // 퀴즈 정답 선택 처리
  const handleQuizSelect = (opt: string) => {
    if (quizSelected !== null || !currentItem) return;

    setQuizSelected(opt);
    const isCorrect = opt.startsWith(currentItem.romaji);
    playJapaneseSpeech(currentChar);

    if (isCorrect) {
      setCorrectCount((prev) => prev + 1);
    }

    setTimeout(() => {
      nextItem();
    }, 1200);
  };

  return (
    <div className="space-y-6">
      {/* 1. 상단: 행 선택기 (훈련 설정 화면) */}
      {!isPlaying && (
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-5 border-b border-zinc-100 dark:border-zinc-800">
            <div>
              <h3 className="text-lg font-bold flex items-center gap-2">
                <Shuffle className="w-5 h-5 text-rose-500" />
                행(行) 선택 맞춤 랜덤 생성기
              </h3>
              <p className="text-xs text-zinc-500 mt-1">
                원하는 행만 체크해서 부담 없이 집중 훈련할 수 있습니다. (예: 아, 하, 마 행만 15글자)
              </p>
            </div>

            {/* 퍼블릭 표준 프리셋 버튼 그룹 */}
            <div className="flex flex-wrap gap-1.5 text-xs">
              <button
                onClick={selectBasicFive}
                className="px-2.5 py-1.5 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 font-semibold hover:bg-zinc-200"
              >
                초반 5행 (あ~な)
              </button>
              <button
                onClick={selectLatterFive}
                className="px-2.5 py-1.5 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 font-semibold hover:bg-zinc-200"
              >
                후반 5행 (は~わ)
              </button>
              <button
                onClick={selectSeionAll}
                className="px-2.5 py-1.5 rounded-lg bg-rose-50 dark:bg-rose-950/40 text-rose-600 dark:text-rose-400 font-bold border border-rose-200 dark:border-rose-900 hover:bg-rose-100"
              >
                기본 청음 전체 (50음도)
              </button>
              <button
                onClick={selectDakuonAll}
                className="px-2.5 py-1.5 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 font-semibold hover:bg-zinc-200"
              >
                탁음·반탁음 전체
              </button>
              <button
                onClick={selectAllRows}
                className="px-2.5 py-1.5 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 font-semibold hover:bg-zinc-200"
              >
                전체 선택
              </button>
              <button
                onClick={clearAllRows}
                className="px-2.5 py-1.5 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-500 hover:bg-zinc-200"
              >
                전체 해제
              </button>
            </div>
          </div>

          {/* 행 체크박스 그리드 */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2.5 my-5">
            {KANA_ROWS.map((row) => {
              const isChecked = selectedRowKeys.includes(row.key);
              return (
                <button
                  key={row.key}
                  type="button"
                  onClick={() => toggleRow(row.key)}
                  className={`flex flex-col items-start p-3 rounded-xl border text-left transition-all ${
                    isChecked
                      ? 'border-rose-500 bg-rose-50/70 dark:bg-rose-950/30 text-rose-900 dark:text-rose-200 shadow-sm'
                      : 'border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50 text-zinc-600 dark:text-zinc-400 hover:border-zinc-300'
                  }`}
                >
                  <div className="flex items-center justify-between w-full">
                    <span className="font-bold text-sm">{row.name}</span>
                    <span
                      className={`w-4 h-4 rounded-full border flex items-center justify-center text-[10px] ${
                        isChecked
                          ? 'border-rose-500 bg-rose-500 text-white'
                          : 'border-zinc-300 dark:border-zinc-700'
                      }`}
                    >
                      {isChecked && '✓'}
                    </span>
                  </div>
                  <span className="text-xs text-zinc-400 mt-1">{row.desc}</span>
                </button>
              );
            })}
          </div>

          {/* 훈련 모드 및 시작 버튼 */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-zinc-100 dark:border-zinc-800">
            <div className="flex items-center gap-3">
              <span className="text-xs font-semibold text-zinc-500">방식:</span>
              <div className="flex p-1 bg-zinc-100 dark:bg-zinc-800 rounded-xl">
                <button
                  onClick={() => setPracticeType('flashcard')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    practiceType === 'flashcard'
                      ? 'bg-white dark:bg-zinc-900 shadow-sm text-zinc-900 dark:text-zinc-100'
                      : 'text-zinc-500 hover:text-zinc-900'
                  }`}
                >
                  <Layers className="w-3.5 h-3.5" />
                  플래시카드 (직접 읽기)
                </button>
                <button
                  onClick={() => setPracticeType('quiz')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    practiceType === 'quiz'
                      ? 'bg-white dark:bg-zinc-900 shadow-sm text-zinc-900 dark:text-zinc-100'
                      : 'text-zinc-500 hover:text-zinc-900'
                  }`}
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  4지선다 퀴즈
                </button>
              </div>
            </div>

            <div className="flex items-center gap-4 w-full sm:w-auto">
              <div className="text-xs text-zinc-500">
                선택됨:{' '}
                <strong className="text-rose-600 dark:text-rose-400 font-bold text-sm">
                  {availableChars.length}
                </strong>
                글자
              </div>
              <button
                onClick={startPractice}
                disabled={availableChars.length === 0}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-rose-500 to-amber-500 text-white font-bold text-sm shadow-md shadow-rose-500/20 hover:opacity-95 active:scale-95 disabled:opacity-40 transition-all flex items-center justify-center gap-2"
              >
                <Shuffle className="w-4 h-4" />
                랜덤 훈련 시작
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 2. 진행 중: 훈련 진행 영역 */}
      {isPlaying && !finished && currentItem && (
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-6 md:p-10 shadow-sm max-w-xl mx-auto">
          {/* 상단 프로그레스 & 종료 버튼 */}
          <div className="flex items-center justify-between mb-6">
            <span className="text-xs font-bold text-zinc-400">
              진행: {currentIndex + 1} / {queue.length}
            </span>
            <button
              onClick={() => setIsPlaying(false)}
              className="text-xs text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 font-medium"
            >
              종료하고 설정으로
            </button>
          </div>

          {/* 프로그레스 바 */}
          <div className="w-full bg-zinc-100 dark:bg-zinc-800 h-2 rounded-full overflow-hidden mb-8">
            <div
              className="bg-gradient-to-r from-rose-500 to-amber-500 h-full transition-all duration-300"
              style={{ width: `${((currentIndex + 1) / queue.length) * 100}%` }}
            />
          </div>

          {/* 훈련 본문 A: 플래시카드 (직접 읽어보기) */}
          {practiceType === 'flashcard' && (
            <div className="flex flex-col items-center">
              <p className="text-xs text-zinc-400 mb-3 flex items-center gap-1">
                <Eye className="w-3.5 h-3.5" />
                문자를 보고 먼저 읽어본 뒤 카드를 눌러 발음을 확인하세요
              </p>

              {/* 3D 플래시카드 */}
              <div
                onClick={flipCard}
                className="w-full h-64 cursor-pointer perspective-1000 my-2"
              >
                <div
                  className={`w-full h-full relative transform-style-3d ${
                    enableTransition ? 'duration-500 transition-transform' : 'transition-none'
                  } ${isFlipped ? 'rotate-y-180' : ''}`}
                >
                  {/* 카드 앞면: 문자만 표시 */}
                  <div className="absolute inset-0 w-full h-full bg-zinc-50 dark:bg-zinc-800/80 rounded-2xl border-2 border-dashed border-zinc-300 dark:border-zinc-700 flex flex-col items-center justify-center backface-hidden shadow-sm hover:border-rose-400 transition-colors">
                    <span className="text-8xl font-black text-zinc-800 dark:text-zinc-100">
                      {currentChar}
                    </span>
                    <span className="text-xs text-zinc-400 mt-4">탭하여 발음 확인 👆</span>
                  </div>

                  {/* 카드 뒷면: 발음 및 음성 */}
                  <div className="absolute inset-0 w-full h-full bg-rose-50/90 dark:bg-rose-950/40 rounded-2xl border-2 border-rose-300 dark:border-rose-800 flex flex-col items-center justify-center rotate-y-180 backface-hidden shadow-sm">
                    <span className="text-6xl font-black text-rose-600 dark:text-rose-400 mb-2">
                      {currentChar}
                    </span>
                    <span className="text-2xl font-bold text-zinc-800 dark:text-zinc-100">
                      {currentItem.romaji}
                    </span>
                    <span className="text-sm text-zinc-500 font-medium">
                      ({currentItem.korean})
                    </span>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        playJapaneseSpeech(currentChar);
                      }}
                      className="mt-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white dark:bg-zinc-800 text-rose-600 dark:text-rose-400 text-xs font-bold shadow hover:bg-rose-50"
                    >
                      <Volume2 className="w-4 h-4" />
                      다시 듣기
                    </button>
                  </div>
                </div>
              </div>

              {/* 하단 버튼 */}
              <div className="flex items-center gap-3 w-full mt-6">
                <button
                  onClick={() => playJapaneseSpeech(currentChar)}
                  className="p-3.5 rounded-xl border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                  title="원어민 발음 듣기"
                >
                  <Volume2 className="w-5 h-5 text-zinc-600 dark:text-zinc-300" />
                </button>
                <button
                  onClick={nextItem}
                  className="flex-1 py-3.5 rounded-xl bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 font-bold text-sm shadow hover:opacity-90 active:scale-95 transition-all"
                >
                  다음 문자 ➔
                </button>
              </div>
            </div>
          )}

          {/* 훈련 본문 B: 4지선다 퀴즈 */}
          {practiceType === 'quiz' && (
            <div className="flex flex-col items-center">
              <div className="w-36 h-36 rounded-2xl bg-zinc-50 dark:bg-zinc-800 flex items-center justify-center border border-zinc-200 dark:border-zinc-700 shadow-inner mb-6">
                <span className="text-7xl font-black text-zinc-800 dark:text-zinc-100">
                  {currentChar}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3 w-full">
                {quizOptions.map((opt) => {
                  const isSelected = quizSelected === opt;
                  const isCorrect = opt.startsWith(currentItem.romaji);

                  let btnStyle =
                    'border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800/80 hover:border-zinc-400 text-zinc-800 dark:text-zinc-200';
                  if (quizSelected !== null) {
                    if (isCorrect) {
                      btnStyle =
                        'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 font-bold';
                    } else if (isSelected) {
                      btnStyle =
                        'border-rose-500 bg-rose-50 dark:bg-rose-950/40 text-rose-700 dark:text-rose-300 font-bold';
                    }
                  }

                  return (
                    <button
                      key={opt}
                      onClick={() => handleQuizSelect(opt)}
                      disabled={quizSelected !== null}
                      className={`p-4 rounded-xl border-2 text-center text-sm font-semibold transition-all active:scale-95 ${btnStyle}`}
                    >
                      {opt}
                    </button>
                  );
                })}
              </div>

              <button
                onClick={() => playJapaneseSpeech(currentChar)}
                className="mt-6 flex items-center gap-1.5 text-xs text-zinc-400 hover:text-zinc-600 font-medium"
              >
                <Volume2 className="w-3.5 h-3.5" />
                발음 힌트 듣기
              </button>
            </div>
          )}
        </div>
      )}

      {/* 3. 완료 화면 */}
      {finished && (
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-8 md:p-12 text-center max-w-md mx-auto shadow-sm">
          <div className="w-16 h-16 rounded-2xl bg-rose-100 dark:bg-rose-950/60 text-rose-500 mx-auto flex items-center justify-center mb-4">
            <Sparkles className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold mb-1">훈련 완료! お疲れ様でした!</h3>
          <p className="text-xs text-zinc-500 mb-6">
            총 {queue.length}개의 문자를 완주했습니다. 오늘의 학습 출석이 인정되었습니다.
          </p>

          {practiceType === 'quiz' && (
            <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-800 mb-6">
              <div className="text-xs text-zinc-400">정답률</div>
              <div className="text-3xl font-black text-rose-600 dark:text-rose-400 mt-1">
                {Math.round((correctCount / queue.length) * 100)}%
              </div>
              <div className="text-xs text-zinc-500 mt-1">
                ({correctCount} / {queue.length} 정답)
              </div>
            </div>
          )}

          <div className="flex gap-2">
            <button
              onClick={startPractice}
              className="flex-1 py-3 rounded-xl bg-rose-500 text-white font-bold text-sm shadow hover:bg-rose-600 transition-all flex items-center justify-center gap-1.5"
            >
              <RotateCcw className="w-4 h-4" />
              다시 훈련하기
            </button>
            <button
              onClick={() => setIsPlaying(false)}
              className="px-4 py-3 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 font-medium text-sm hover:bg-zinc-200 transition-all"
            >
              설정 변경
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
