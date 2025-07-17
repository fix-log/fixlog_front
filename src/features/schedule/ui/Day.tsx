'use client';

import { getDate, isSameDay } from 'date-fns';
import { cn } from '@/shared/lib/util';

interface DayProps {
  date: Date;
  nthWeek: number;
  selectedDate: Date | null;
  setSelectedDate: (date: Date | null) => void;
}

export default function Day({ date, nthWeek, selectedDate, setSelectedDate }: DayProps) {
  const isToday = isSameDay(date, new Date());
  const isSelected = selectedDate && isSameDay(date, selectedDate);
  const isNotThisMonth =
    (nthWeek === 1 && getDate(date) > 22) || (nthWeek >= 5 && getDate(date) < 7);

  return (
    // TODO: 오늘일 경우에만 보더 추가
    <td onClick={() => setSelectedDate(date)}>
      <div
        className={cn(
          'box-border flex h-[160px] flex-col border-[1.5px] border-transparent p-3',
          isToday && 'border-gray3 rounded-[10px]',
          isSelected && 'border-mainRed rounded-[10px]',
        )}
      >
        <p className={isNotThisMonth ? 'text-gray3' : ''}>{getDate(date)}</p>
        {/* TODO: 일정 배치 */}
      </div>
    </td>
  );
}
