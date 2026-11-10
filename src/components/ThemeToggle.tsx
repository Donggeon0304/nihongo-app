'use client';

import React, { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [mounted, setMounted] = useState(false);

  const applyTheme = (targetTheme: 'light' | 'dark') => {
    const root = document.documentElement;
    root.setAttribute('data-theme', targetTheme);
    const meta1 = document.getElementById('color-scheme-meta');
    const meta2 = document.getElementById('supported-color-schemes-meta');
    if (targetTheme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
      root.style.colorScheme = 'only dark';
      if (meta1) meta1.setAttribute('content', 'only dark');
      if (meta2) meta2.setAttribute('content', 'only dark');
    } else {
      root.classList.remove('dark');
      root.classList.add('light');
      root.style.colorScheme = 'only light';
      if (meta1) meta1.setAttribute('content', 'only light');
      if (meta2) meta2.setAttribute('content', 'only light');
    }
  };

  useEffect(() => {
    setMounted(true);
    // 기본값은 무조건 'light', 사용자가 직접 저장한 값이 'dark'일 때만 다크모드 적용
    const saved = localStorage.getItem('nihongo_theme') || 'light';
    const initialTheme = saved === 'dark' ? 'dark' : 'light';
    setTheme(initialTheme);
    applyTheme(initialTheme);
  }, []);

  const toggleTheme = () => {
    const next = theme === 'light' ? 'dark' : 'light';
    setTheme(next);
    localStorage.setItem('nihongo_theme', next);
    applyTheme(next);
  };

  if (!mounted) {
    return <div className="w-9 h-9" />;
  }

  return (
    <button
      onClick={toggleTheme}
      type="button"
      className="p-2 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-700/60 shadow-sm transition-all"
      title={theme === 'dark' ? '라이트 모드로 전환' : '다크 모드로 전환'}
      aria-label="화이트/다크모드 전환"
    >
      {theme === 'dark' ? (
        <Sun className="w-4 h-4 text-amber-400 hover:rotate-45 transition-transform" />
      ) : (
        <Moon className="w-4 h-4 text-zinc-600 hover:-rotate-12 transition-transform" />
      )}
    </button>
  );
}
