export interface QuizResult {
  id: string;
  date: string; // YYYY-MM-DD
  timestamp: number;
  category: string; // 예: "JLPT N5", "여행/일상", "오답노트"
  totalQuestions: number;
  correctCount: number;
  score: number; // 0 ~ 100
  wrongWordIds: string[];
}

export interface UserStats {
  attendanceDates: string[]; // ['2026-11-10', ...]
  streak: number;
  lastActiveDate: string;
  bookmarks: string[]; // 단어 id 목록
  wrongWordIds: string[]; // 오답노트 단어 id 목록
  quizHistory: QuizResult[];
}

const STORAGE_KEY = 'nihongo_user_stats_v1';

const getTodayString = (): string => {
  const d = new Date();
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

const getYesterdayString = (): string => {
  const d = new Date();
  d.setDate(d.getDate() - 1);
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

export const getInitialStats = (): UserStats => ({
  attendanceDates: [],
  streak: 0,
  lastActiveDate: '',
  bookmarks: [],
  wrongWordIds: [],
  quizHistory: [],
});

export const loadUserStats = (): UserStats => {
  if (typeof window === 'undefined') return getInitialStats();
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return getInitialStats();
    return { ...getInitialStats(), ...JSON.parse(raw) };
  } catch (e) {
    console.error('Failed to load user stats', e);
    return getInitialStats();
  }
};

export const saveUserStats = (stats: UserStats): void => {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(stats));
  } catch (e) {
    console.error('Failed to save user stats', e);
  }
};

/**
 * 오늘 출석 체크 (학습이나 퀴즈를 완료했을 때 호출)
 */
export const markAttendance = (): UserStats => {
  const stats = loadUserStats();
  const today = getTodayString();
  const yesterday = getYesterdayString();

  if (!stats.attendanceDates.includes(today)) {
    stats.attendanceDates.push(today);
  }

  // 스트릭 계산
  if (stats.lastActiveDate === yesterday) {
    stats.streak += 1;
  } else if (stats.lastActiveDate !== today) {
    stats.streak = 1;
  }

  stats.lastActiveDate = today;
  saveUserStats(stats);
  return stats;
};

/**
 * 퀴즈 결과 저장
 */
export const saveQuizResult = (result: Omit<QuizResult, 'id' | 'date' | 'timestamp'>): UserStats => {
  const stats = loadUserStats();
  const today = getTodayString();

  const newResult: QuizResult = {
    ...result,
    id: `quiz_${Date.now()}`,
    date: today,
    timestamp: Date.now(),
  };

  stats.quizHistory.unshift(newResult);

  // 오답노트에 추가 (중복 방지)
  result.wrongWordIds.forEach((id) => {
    if (!stats.wrongWordIds.includes(id)) {
      stats.wrongWordIds.push(id);
    }
  });

  saveUserStats(stats);
  markAttendance();
  return loadUserStats();
};

/**
 * 북마크 토글
 */
export const toggleBookmark = (wordId: string): boolean => {
  const stats = loadUserStats();
  const exists = stats.bookmarks.includes(wordId);
  if (exists) {
    stats.bookmarks = stats.bookmarks.filter((id) => id !== wordId);
  } else {
    stats.bookmarks.push(wordId);
  }
  saveUserStats(stats);
  return !exists;
};

/**
 * 오답노트에서 특정 단어 제거 (복습 완료 후 삭제)
 */
export const removeFromWrongWords = (wordId: string): void => {
  const stats = loadUserStats();
  stats.wrongWordIds = stats.wrongWordIds.filter((id) => id !== wordId);
  saveUserStats(stats);
};
