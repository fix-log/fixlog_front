'use client';

import { ArrowLeft } from 'lucide-react'; // 아이콘 라이브러리 예시

export default function FixletterHeader() {
  return (
    <header className='flex h-14 w-full items-center border-b border-gray-100 bg-white px-6'>
      {/* ← 아이콘 */}
      <button className='mr-2 p-2' aria-label='뒤로가기'>
        <ArrowLeft size={22} />
      </button>
      {/* 타이틀 */}
      <h1 className='text-lg font-bold select-none'>픽레터</h1>
      {/* 오른쪽 공간 확보용 */}
      <div className='flex-1' />
    </header>
  );
}
