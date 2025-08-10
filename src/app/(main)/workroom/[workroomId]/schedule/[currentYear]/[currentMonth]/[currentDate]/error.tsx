'use client';

import { useEffect } from 'react';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error('Schedule error:', error);
  }, [error]);

  return (
    <div className='flex min-h-[400px] flex-col items-center justify-center gap-4'>
      <h2 className='text-xl font-bold text-gray-800'>일정 페이지를 불러올 수 없습니다</h2>
      <p className='text-gray-600'>요청하신 날짜가 유효하지 않거나 페이지에 문제가 발생했습니다.</p>
      <button
        onClick={reset}
        className='bg-mainRed hover:bg-mainRed/90 cursor-pointer rounded-lg px-4 py-2 text-white'
      >
        다시 시도
      </button>
    </div>
  );
}

// 임시 에러 페이지
// TODO: 수정 필요
