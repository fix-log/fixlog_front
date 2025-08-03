'use client';

import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function FixletterHeader() {
  const router = useRouter();

  return (
    <header className='relative flex h-[80px] justify-center border-b-1 border-gray-100 bg-white px-6'>
      <button className='p-2' aria-label='뒤로가기'>
        <ArrowLeft size={30} onClick={() => router.push('/')} />
      </button>
      <h1 className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[22px] font-bold select-none'>
        픽레터
      </h1>
      {/* 오른쪽 공간 확보용 */}
      <div className='flex-1' />
    </header>
  );
}
