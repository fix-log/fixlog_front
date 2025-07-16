'use client';

import { addMonths, subMonths, getMonth, getYear } from 'date-fns';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// TODO: 상수로 분리 (임시)
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
] as const;

interface CalenderHeaderProps {
  currentMonth: Date;
  setCurrentMonth: (date: Date) => void; // TODO: 타입 수정
}

export default function CalenderHeader({ currentMonth, setCurrentMonth }: CalenderHeaderProps) {
  // console.log(getMonth(currentDate));
  // 월 -1 (0 - 11)

  const handlePrev = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };

  const handleNext = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };

  return (
    <div className='flex items-center justify-between py-10'>
      <div className='flex items-center gap-8'>
        <button
          onClick={handlePrev}
          className='hover:bg-gray5 rounded-md transition-all duration-200 hover:cursor-pointer'
        >
          <ChevronLeft className='size-6' />
        </button>

        {/* 데이터 받아서 월 표시 */}
        <div className='flex min-w-[150px] items-end justify-center gap-2'>
          <span className='text-h3 font-extrabold'>{getMonth(currentMonth) + 1}</span>
          <span className='text-h4 text-gray3 font-extrabold'>
            {months[getMonth(currentMonth)]}
          </span>
        </div>

        <button
          onClick={handleNext}
          className='hover:bg-gray5 rounded-md transition-all duration-200 hover:cursor-pointer'
        >
          <ChevronRight className='size-6' />
        </button>
      </div>

      {/* 임시 - 디자인에 없음 (추후 삭제) */}
      <span className='text-h4 text-gray3 px-4 font-extrabold'>{getYear(currentMonth)}</span>
    </div>
  );
}
