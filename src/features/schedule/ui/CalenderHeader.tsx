import { getMonth, getYear, getDate, subMonths, addMonths } from 'date-fns';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';

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
  workroomId: string;
  selectedDate: Date;
}

export default async function CalenderHeader({ workroomId, selectedDate }: CalenderHeaderProps) {
  const prevMonth = subMonths(selectedDate, 1);
  const nextMonth = addMonths(selectedDate, 1);

  return (
    <div className='flex items-center justify-between py-10'>
      <div className='flex items-center gap-8'>
        <Link
          href={`/workroom/${workroomId}/schedule/${getYear(prevMonth)}/${getMonth(prevMonth) + 1}/${getDate(prevMonth)}`}
          className='hover:bg-gray5 cursor-pointer rounded-md transition-all duration-200'
        >
          <ChevronLeft className='size-6' />
        </Link>

        {/* 데이터 받아서 월 표시 */}
        <div className='flex min-w-[150px] items-end justify-center gap-2'>
          <span className='text-h3 font-extrabold'>{getMonth(selectedDate) + 1}</span>
          <span className='text-h4 text-gray3 font-extrabold'>
            {months[getMonth(selectedDate)]}
          </span>
        </div>

        <Link
          href={`/workroom/${workroomId}/schedule/${getYear(nextMonth)}/${getMonth(nextMonth) + 1}/${getDate(nextMonth)}`}
          className='hover:bg-gray5 cursor-pointer rounded-md transition-all duration-200'
        >
          <ChevronRight className='size-6' />
        </Link>
      </div>

      {/* 임시 - 디자인에 없음 (추후 삭제) */}
      <span className='text-h4 text-gray3 px-4 font-extrabold'>{getYear(selectedDate)}</span>
    </div>
  );
}
