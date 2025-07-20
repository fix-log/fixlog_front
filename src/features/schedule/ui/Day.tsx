import Link from 'next/link';
import { getDate, getMonth, getYear, isSameDay } from 'date-fns';
import { cn } from '@/shared/lib/util';

interface DayProps {
  date: Date;
  nthWeek: number;
  selectedDate: Date | null;
  workroomId: string;
}

export default async function Day({ date, nthWeek, selectedDate, workroomId }: DayProps) {
  const isToday = isSameDay(date, new Date());
  const isSelected = selectedDate && isSameDay(date, selectedDate);
  const isNotThisMonth =
    (nthWeek === 1 && getDate(date) > 22) || (nthWeek >= 5 && getDate(date) < 7);

  return (
    // TODO: 오늘일 경우에만 보더 추가
    <td>
      {/* TODO: 링크 태그를 어디에 넣어야 할지 다시 고민하기 (클릭이 일정바랑 겹칠 가능성에 대해 생각해봐야함) */}
      <Link
        draggable={false}
        href={`/workroom/${workroomId}/schedule/${getYear(date)}/${getMonth(date) + 1}/${getDate(date)}`}
        className={cn(
          'box-border flex h-[160px] flex-col border-[1.5px] border-transparent p-3',
          isToday && 'border-gray3 rounded-[10px]',
          isSelected && 'border-mainRed rounded-[10px]',
        )}
      >
        <p className={isNotThisMonth ? 'text-gray3' : ''}>{getDate(date)}</p>
        {/* TODO: 일정 배치 */}
      </Link>
    </td>
  );
}
