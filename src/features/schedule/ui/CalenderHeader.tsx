'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CalenderHeaderProps {
  month: number;
  setMonth: (month: number) => void; // TODO: 타입 수정
}

export default function CalenderHeader({ month, setMonth }: CalenderHeaderProps) {
  console.log(month);

  // TODO: 1월 이전, 12월 이후 -> 연도 변경 처리 가능해야함
  const handlePrev = () => {
    setMonth(month - 1);
  };

  const handleNext = () => {
    setMonth(month + 1);
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
      <div className='flex items-end gap-2'>
        <span className='text-h3 font-extrabold'>{month + 1}</span>
        {/* <span className='font-extrabold text-h4 text-gray3'>{months[month]}</span> */}
      </div>

      <button
        onClick={handleNext}
        className='hover:bg-gray5 rounded-md transition-all duration-200 hover:cursor-pointer'
      >
        <ChevronRight className='size-6' />
      </button>
    </div>
  );
}
