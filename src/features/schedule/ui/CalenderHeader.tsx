'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function CalenderHeader() {
  // TODO: 인자로 월 받아오기? (월 만으로 충분한가?)

  const handlePrev = () => {
    console.log('prev');
  };

  const handleNext = () => {
    console.log('next');
  };

  return (
    <div className='flex items-center gap-8 py-10'>
      <button
        onClick={handlePrev}
        className='hover:bg-gray5 rounded-md transition-all duration-200 hover:cursor-pointer'
      >
        <ChevronLeft className='size-6' />
      </button>

      {/* 데이터 받아서 월 표시 */}
      <div>6 June</div>

      <button
        onClick={handleNext}
        className='hover:bg-gray5 rounded-md transition-all duration-200 hover:cursor-pointer'
      >
        <ChevronRight className='size-6' />
      </button>
    </div>
  );
}
