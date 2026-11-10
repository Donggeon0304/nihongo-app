import React from 'react';
import QuizRunner from '@/components/QuizRunner';
import { GraduationCap } from 'lucide-react';

export default function QuizPage() {
  return (
    <div className="space-y-6">
      <div className="pb-4 border-b border-zinc-200 dark:border-zinc-800">
        <h1 className="text-2xl md:text-3xl font-black flex items-center gap-2.5">
          <GraduationCap className="w-7 h-7 text-rose-500" />
          단어 쪽지시험 (小テスト)
        </h1>
        <p className="text-sm text-zinc-500 mt-1">
          매일 10개, 20개, 50개, 100개씩 단어 쪽지시험을 보고 결과를 기록하세요.
        </p>
      </div>

      <QuizRunner />
    </div>
  );
}
