'use client';

import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { VOCAB_DATA, WordItem } from '@/data/vocabData';
import { playJapaneseSpeech } from '@/lib/speech';
import { loadUserStats, saveQuizResult } from '@/lib/storage';
import { kanaToHangul } from '@/lib/kanaToHangul';
import {
  GraduationCap,
  Play,
  RotateCcw,
  Volume2,
  CheckCircle2,
  XCircle,
  Trophy,
  Flame,
  Clock,
  BookX,
  Sparkles,
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface QuizQuestion {
  word: WordItem;
  options: { label: string; isCorrect: boolean }[];
  type: 'kanji_to_meaning' | 'meaning_to_kanji' | 'listening';
}

export default function QuizRunner() {
  // 시험 설정 상태
  const [questionCount, setQuestionCount] = useState<number>(20);
  const [selectedRange, setSelectedRange] = useState<string>('N5');
  const [questionType, setQuestionType] = useState<'kanji_to_meaning' | 'meaning_to_kanji' | 'listening'>('kanji_to_meaning');
  const [showHangulHint, setShowHangulHint] = useState<boolean>(true); // 왕초보를 위한 한글 발음 표기 힌트
  const [isStarted, setIsStarted] = useState<boolean>(false);

  // 시험 진행 상태
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [correctAnswers, setCorrectAnswers] = useState<number>(0);
  const [wrongWords, setWrongWords] = useState<WordItem[]>([]);
  const [isFinished, setIsFinished] = useState<boolean>(false);
  const [startTime, setStartTime] = useState<number>(0);
  const [elapsedSec, setElapsedSec] = useState<number>(0);

  // 유저 오답노트 단어 ID들
  const [userWrongIds, setUserWrongIds] = useState<string[]>([]);

  useEffect(() => {
    const stats = loadUserStats();
    setUserWrongIds(stats.wrongWordIds || []);
  }, [isStarted]);

  // 후보 단어 풀 추출
  const targetPool = useMemo(() => {
    if (selectedRange === 'all') return VOCAB_DATA;
    if (selectedRange === 'wrong') {
      return VOCAB_DATA.filter((w) => userWrongIds.includes(w.id));
    }
    if (selectedRange === 'travel_daily') {
      return VOCAB_DATA.filter((w) => ['travel', 'food', 'daily', 'shopping'].includes(w.category));
    }
    return VOCAB_DATA.filter((w) => w.level === selectedRange);
  }, [selectedRange, userWrongIds]);

  // 시험 시작 핸들러
  const startQuiz = useCallback(() => {
    if (targetPool.length === 0) return;

    // 단어 무작위 셔플 후 설정한 개수만큼 슬라이스
    const shuffledPool = [...targetPool].sort(() => 0.5 - Math.random());
    const selectedWords = shuffledPool.slice(0, Math.min(questionCount, shuffledPool.length));

    // 문제 데이터 생성
    const generatedQuestions: QuizQuestion[] = selectedWords.map((word) => {
      // 오답 후보 3개 추출
      const wrongPool = VOCAB_DATA.filter((w) => w.id !== word.id);
      const shuffledWrong = [...wrongPool].sort(() => 0.5 - Math.random()).slice(0, 3);

      let correctLabel = '';
      let wrongLabels: string[] = [];

      if (questionType === 'kanji_to_meaning') {
        correctLabel = word.meaning;
        wrongLabels = shuffledWrong.map((w) => w.meaning);
      } else if (questionType === 'meaning_to_kanji') {
        const hangul = showHangulHint ? ` [${kanaToHangul(word.kana)}]` : '';
        correctLabel = `${word.kanji} (${word.kana})${hangul}`;
        wrongLabels = shuffledWrong.map((w) => {
          const wHangul = showHangulHint ? ` [${kanaToHangul(w.kana)}]` : '';
          return `${w.kanji} (${w.kana})${wHangul}`;
        });
      } else {
        // listening
        const hangul = showHangulHint ? ` [${kanaToHangul(word.kana)}]` : '';
        correctLabel = `${word.meaning} [${word.kanji}]${hangul}`;
        wrongLabels = shuffledWrong.map((w) => {
          const wHangul = showHangulHint ? ` [${kanaToHangul(w.kana)}]` : '';
          return `${word.meaning} [${w.kanji}]${wHangul}`;
        });
      }

      const options = [
        { label: correctLabel, isCorrect: true },
        ...wrongLabels.map((l) => ({ label: l, isCorrect: false })),
      ].sort(() => 0.5 - Math.random());

      return {
        word,
        options,
        type: questionType,
      };
    });

    setQuestions(generatedQuestions);
    setCurrentIndex(0);
    setSelectedOption(null);
    setCorrectAnswers(0);
    setWrongWords([]);
    setIsFinished(false);
    setIsStarted(true);
    setStartTime(Date.now());

    // 첫 문제가 리스닝이면 바로 발음 재생
    if (questionType === 'listening' && generatedQuestions[0]) {
      setTimeout(() => {
        playJapaneseSpeech(generatedQuestions[0].word.kanji || generatedQuestions[0].word.kana);
      }, 300);
    }
  }, [targetPool, questionCount, questionType]);

  const currentQ = questions[currentIndex] || null;

  // 다음 문제로 진행
  const handleSelectOption = (optLabel: string, isCorrect: boolean) => {
    if (selectedOption !== null || !currentQ) return;

    setSelectedOption(optLabel);

    // 정답 시 음성 및 점수 반영
    playJapaneseSpeech(currentQ.word.kanji || currentQ.word.kana);

    if (isCorrect) {
      setCorrectAnswers((prev) => prev + 1);
    } else {
      setWrongWords((prev) => [...prev, currentQ.word]);
    }

    // 0.8초 후 다음 문제
    setTimeout(() => {
      if (currentIndex + 1 >= questions.length) {
        // 시험 완료 처리
        const timeTaken = Math.round((Date.now() - startTime) / 1000);
        setElapsedSec(timeTaken);
        setIsFinished(true);

        const finalScore = Math.round(
          ((correctAnswers + (isCorrect ? 1 : 0)) / questions.length) * 100
        );

        // 결과 로컬 스토리지에 저장 (출석체크 및 오답노트 자동 반영)
        const currentWrongs = isCorrect ? wrongWords : [...wrongWords, currentQ.word];
        saveQuizResult({
          category: `쪽지시험 (${selectedRange})`,
          totalQuestions: questions.length,
          correctCount: correctAnswers + (isCorrect ? 1 : 0),
          score: finalScore,
          wrongWordIds: currentWrongs.map((w) => w.id),
        });

        if (finalScore >= 80) {
          confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
          });
        }
      } else {
        const nextIdx = currentIndex + 1;
        setCurrentIndex(nextIdx);
        setSelectedOption(null);
        if (questionType === 'listening' && questions[nextIdx]) {
          playJapaneseSpeech(questions[nextIdx].word.kanji || questions[nextIdx].word.kana);
        }
      }
    }, 800);
  };

  return (
    <div className="space-y-6">
      {/* 1. 시험 전 설정 모달 / 화면 */}
      {!isStarted && (
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-6 md:p-8 shadow-sm max-w-2xl mx-auto space-y-6">
          <div className="text-center pb-4 border-b border-zinc-100 dark:border-zinc-800">
            <div className="w-14 h-14 rounded-2xl bg-rose-50 dark:bg-rose-950/60 text-rose-500 mx-auto flex items-center justify-center mb-3">
              <GraduationCap className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-black text-zinc-900 dark:text-zinc-100">
              오늘의 단어 쪽지시험
            </h2>
            <p className="text-xs text-zinc-500 mt-1">
              매일 꾸준히 원하는 개수만큼 시험을 보고 실력을 테스트하세요. 오답은 자동으로 노트에 저장됩니다.
            </p>
          </div>

          {/* 문제 개수 선택 (10, 20, 50, 100) */}
          <div>
            <label className="block text-xs font-bold text-zinc-600 dark:text-zinc-400 mb-2">
              1. 문항 수 선택 (원하는 개수 클릭)
            </label>
            <div className="grid grid-cols-4 gap-2.5">
              {[10, 20, 50, 100].map((count) => (
                <button
                  key={count}
                  type="button"
                  onClick={() => setQuestionCount(count)}
                  className={`py-3 rounded-xl border text-sm font-black transition-all ${
                    questionCount === count
                      ? 'border-rose-500 bg-rose-500 text-white shadow-md shadow-rose-500/20 scale-102'
                      : 'border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-800/60 text-zinc-700 dark:text-zinc-300 hover:border-zinc-300'
                  }`}
                >
                  {count}문제
                </button>
              ))}
            </div>
          </div>

          {/* 출제 범위 선택 */}
          <div>
            <label className="block text-xs font-bold text-zinc-600 dark:text-zinc-400 mb-2">
              2. 출제 범위 (난이도 / 카테고리)
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {[
                { key: 'N5', name: 'JLPT N5 (초급)' },
                { key: 'N4', name: 'JLPT N4' },
                { key: 'N3', name: 'JLPT N3' },
                { key: 'travel_daily', name: '여행 & 일상 필수' },
                { key: 'all', name: '전체 단어 (종합)' },
                {
                  key: 'wrong',
                  name: `내 오답노트 (${userWrongIds.length})`,
                  disabled: userWrongIds.length === 0,
                },
              ].map((item) => (
                <button
                  key={item.key}
                  type="button"
                  disabled={item.disabled}
                  onClick={() => setSelectedRange(item.key)}
                  className={`p-3 rounded-xl border text-xs font-bold text-left transition-all ${
                    selectedRange === item.key
                      ? 'border-rose-500 bg-rose-50 dark:bg-rose-950/40 text-rose-600 dark:text-rose-400'
                      : 'border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-800/40 text-zinc-600 dark:text-zinc-400 hover:border-zinc-300'
                  } ${item.disabled ? 'opacity-40 cursor-not-allowed' : ''}`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          {/* 4. 왕초보 한글 발음 힌트 모드 토글 */}
          <div className="p-3.5 rounded-2xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200/80 dark:border-amber-900/60 flex items-center justify-between">
            <div>
              <span className="font-bold text-xs text-amber-900 dark:text-amber-200 block">
                왕초보 모드: 친절한 한글 발음 표시
              </span>
              <span className="text-[11px] text-amber-700/80 dark:text-amber-400">
                히라가나/한자를 몰라도 소리(한글 발음)로 회화 단어를 맞출 수 있습니다.
              </span>
            </div>
            <button
              type="button"
              onClick={() => setShowHangulHint(!showHangulHint)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                showHangulHint
                  ? 'bg-amber-500 text-white shadow-sm'
                  : 'bg-zinc-200 dark:bg-zinc-700 text-zinc-600'
              }`}
            >
              {showHangulHint ? '켜짐 🟢' : '꺼짐'}
            </button>
          </div>

          {/* 문제 유형 선택 */}
          <div>
            <label className="block text-xs font-bold text-zinc-600 dark:text-zinc-400 mb-2">
              3. 문제 유형
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              <button
                type="button"
                onClick={() => setQuestionType('kanji_to_meaning')}
                className={`p-3 rounded-xl border text-xs font-bold text-center transition-all ${
                  questionType === 'kanji_to_meaning'
                    ? 'border-rose-500 bg-rose-50 dark:bg-rose-950/40 text-rose-600 dark:text-rose-400'
                    : 'border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-800/40 text-zinc-600'
                }`}
              >
                단어 보고 뜻 맞추기
              </button>
              <button
                type="button"
                onClick={() => setQuestionType('meaning_to_kanji')}
                className={`p-3 rounded-xl border text-xs font-bold text-center transition-all ${
                  questionType === 'meaning_to_kanji'
                    ? 'border-rose-500 bg-rose-50 dark:bg-rose-950/40 text-rose-600 dark:text-rose-400'
                    : 'border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-800/40 text-zinc-600'
                }`}
              >
                뜻 보고 단어 맞추기
              </button>
              <button
                type="button"
                onClick={() => setQuestionType('listening')}
                className={`p-3 rounded-xl border text-xs font-bold text-center transition-all ${
                  questionType === 'listening'
                    ? 'border-rose-500 bg-rose-50 dark:bg-rose-950/40 text-rose-600 dark:text-rose-400'
                    : 'border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-800/40 text-zinc-600'
                }`}
              >
                🔊 발음 듣고 맞추기
              </button>
            </div>
          </div>

          {/* 시작 버튼 */}
          <div className="pt-2">
            <button
              onClick={startQuiz}
              disabled={targetPool.length === 0}
              className="w-full py-4 rounded-2xl bg-gradient-to-r from-rose-500 to-amber-500 text-white font-bold text-base shadow-lg shadow-rose-500/20 hover:opacity-95 active:scale-98 transition-all flex items-center justify-center gap-2 disabled:opacity-40"
            >
              <Play className="w-5 h-5 fill-current" />
              쪽지시험 시작하기 ({Math.min(questionCount, targetPool.length)}문제)
            </button>
            {targetPool.length === 0 && (
              <p className="text-xs text-rose-500 text-center mt-2">
                선택한 범위에 단어가 없습니다. 범위를 변경해 주세요.
              </p>
            )}
          </div>
        </div>
      )}

      {/* 2. 시험 진행 중 UI */}
      {isStarted && !isFinished && currentQ && (
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-6 md:p-10 shadow-sm max-w-xl mx-auto">
          {/* 상단 인디케이터 */}
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-bold text-zinc-400">
              문제 {currentIndex + 1} / {questions.length}
            </span>
            <button
              onClick={() => setIsStarted(false)}
              className="text-xs text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200"
            >
              시험 포기
            </button>
          </div>

          {/* 프로그레스 바 */}
          <div className="w-full bg-zinc-100 dark:bg-zinc-800 h-2.5 rounded-full overflow-hidden mb-8">
            <div
              className="bg-gradient-to-r from-rose-500 to-amber-500 h-full transition-all duration-300"
              style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
            />
          </div>

          {/* 문제 카드 본문 */}
          <div className="text-center py-6 mb-6">
            {currentQ.type === 'kanji_to_meaning' && (
              <div>
                <span className="text-xs text-zinc-400 font-semibold mb-2 block">
                  다음 일본어 단어의 올바른 한국어 뜻은?
                </span>
                <h2 className="text-5xl font-black text-zinc-900 dark:text-zinc-100 mb-2">
                  {currentQ.word.kanji}
                </h2>
                <div className="flex items-center justify-center gap-2 flex-wrap">
                  {currentQ.word.kanji !== currentQ.word.kana && (
                    <span className="text-lg font-semibold text-rose-500">
                      {currentQ.word.kana}
                    </span>
                  )}
                  {showHangulHint && (
                    <span className="px-2.5 py-0.5 rounded-lg bg-amber-50 dark:bg-amber-950/60 border border-amber-200 dark:border-amber-800 text-amber-800 dark:text-amber-300 font-black text-sm">
                      발음: [{kanaToHangul(currentQ.word.kana)}]
                    </span>
                  )}
                </div>
              </div>
            )}

            {currentQ.type === 'meaning_to_kanji' && (
              <div>
                <span className="text-xs text-zinc-400 font-semibold mb-2 block">
                  다음 뜻에 알맞은 일본어 단어는?
                </span>
                <h2 className="text-4xl font-black text-zinc-900 dark:text-zinc-100 mb-2">
                  {currentQ.word.meaning}
                </h2>
              </div>
            )}

            {currentQ.type === 'listening' && (
              <div>
                <span className="text-xs text-zinc-400 font-semibold mb-3 block">
                  들려주는 원어민 발음을 듣고 알맞은 단어를 고르세요
                </span>
                <button
                  onClick={() =>
                    playJapaneseSpeech(currentQ.word.kanji || currentQ.word.kana)
                  }
                  className="w-20 h-20 rounded-full bg-rose-50 dark:bg-rose-950/60 text-rose-500 hover:bg-rose-100 mx-auto flex items-center justify-center shadow-md active:scale-95 transition-all"
                >
                  <Volume2 className="w-10 h-10" />
                </button>
                <span className="text-xs text-zinc-400 mt-2 block">버튼을 눌러 다시 듣기</span>
              </div>
            )}

            {currentQ.type !== 'listening' && (
              <button
                onClick={() =>
                  playJapaneseSpeech(currentQ.word.kanji || currentQ.word.kana)
                }
                className="mt-3 inline-flex items-center gap-1.5 text-xs text-zinc-400 hover:text-zinc-600 font-medium"
              >
                <Volume2 className="w-3.5 h-3.5" />
                발음 듣기
              </button>
            )}
          </div>

          {/* 4지선다 옵션 목록 */}
          <div className="grid grid-cols-1 gap-3">
            {currentQ.options.map((opt) => {
              const isSelected = selectedOption === opt.label;
              let btnStyle =
                'border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800/80 hover:border-zinc-400 text-zinc-800 dark:text-zinc-200';

              if (selectedOption !== null) {
                if (opt.isCorrect) {
                  btnStyle =
                    'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 font-bold';
                } else if (isSelected) {
                  btnStyle =
                    'border-rose-500 bg-rose-50 dark:bg-rose-950/40 text-rose-700 dark:text-rose-300 font-bold';
                }
              }

              return (
                <button
                  key={opt.label}
                  onClick={() => handleSelectOption(opt.label, opt.isCorrect)}
                  disabled={selectedOption !== null}
                  className={`p-4 rounded-2xl border-2 text-left text-sm font-semibold transition-all flex items-center justify-between ${btnStyle}`}
                >
                  <span>{opt.label}</span>
                  {selectedOption !== null && opt.isCorrect && (
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                  )}
                  {selectedOption !== null && isSelected && !opt.isCorrect && (
                    <XCircle className="w-5 h-5 text-rose-500 shrink-0" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* 3. 시험 결과 화면 */}
      {isFinished && (
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-8 md:p-12 text-center max-w-xl mx-auto shadow-sm space-y-6">
          <div className="w-20 h-20 rounded-3xl bg-amber-50 dark:bg-amber-950/60 text-amber-500 mx-auto flex items-center justify-center">
            <Trophy className="w-10 h-10" />
          </div>

          <div>
            <h2 className="text-2xl font-black text-zinc-900 dark:text-zinc-100">
              쪽지시험 채점 결과
            </h2>
            <p className="text-xs text-zinc-500 mt-1">
              오늘의 시험 결과가 학습 기록에 저장되었으며, 출석이 인정되었습니다!
            </p>
          </div>

          {/* 점수 & 통계 박스 */}
          <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-100 dark:border-zinc-800">
            <div>
              <div className="text-xs text-zinc-400">최종 점수</div>
              <div className="text-3xl font-black text-rose-600 dark:text-rose-400 mt-1">
                {Math.round((correctAnswers / questions.length) * 100)}점
              </div>
            </div>
            <div>
              <div className="text-xs text-zinc-400">맞힌 개수</div>
              <div className="text-2xl font-bold text-zinc-800 dark:text-zinc-200 mt-1">
                {correctAnswers} / {questions.length}
              </div>
            </div>
            <div>
              <div className="text-xs text-zinc-400">소요 시간</div>
              <div className="text-2xl font-bold text-zinc-800 dark:text-zinc-200 mt-1 flex items-center justify-center gap-1">
                <Clock className="w-4 h-4 text-zinc-400" />
                {elapsedSec}초
              </div>
            </div>
          </div>

          {/* 틀린 단어 목록 (오답 노트) */}
          {wrongWords.length > 0 ? (
            <div className="text-left">
              <h4 className="text-xs font-bold text-rose-500 flex items-center gap-1 mb-2">
                <BookX className="w-4 h-4" />
                틀린 단어 ({wrongWords.length}개) - 오답노트에 자동 보관됨
              </h4>
              <div className="space-y-2 max-h-52 overflow-y-auto pr-1">
                {wrongWords.map((w) => (
                  <div
                    key={w.id}
                    className="p-3 rounded-xl bg-zinc-50 dark:bg-zinc-800 flex items-center justify-between text-xs"
                  >
                    <div>
                      <strong className="text-zinc-900 dark:text-zinc-100 text-sm mr-1.5">
                        {w.kanji}
                      </strong>
                      <span className="text-zinc-400 mr-2">[{w.kana}]</span>
                      <span className="text-zinc-600 dark:text-zinc-300 font-medium">
                        {w.meaning}
                      </span>
                    </div>
                    <button
                      onClick={() => playJapaneseSpeech(w.kanji || w.kana)}
                      className="p-1.5 hover:text-rose-500 text-zinc-400 transition-colors"
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 text-sm font-bold flex items-center justify-center gap-2">
              <Sparkles className="w-5 h-5" />
              대단해요! 모든 문제를 완벽하게 맞혔습니다! (만점 💯)
            </div>
          )}

          {/* 하단 액션 버튼 */}
          <div className="flex gap-3 pt-2">
            <button
              onClick={startQuiz}
              className="flex-1 py-3.5 rounded-xl bg-rose-500 text-white font-bold text-sm shadow hover:bg-rose-600 transition-all flex items-center justify-center gap-2"
            >
              <RotateCcw className="w-4 h-4" />
              다시 시험보기
            </button>
            <button
              onClick={() => setIsStarted(false)}
              className="px-5 py-3.5 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 font-semibold text-sm hover:bg-zinc-200 transition-all"
            >
              설정 변경
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
