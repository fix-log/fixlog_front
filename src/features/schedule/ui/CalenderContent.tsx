'use client';

import { addDays, eachDayOfInterval, eachWeekOfInterval, endOfMonth, startOfMonth } from 'date-fns';
import Week from './Week';

// TODO: 상수로 분리 (임시)
const days = ['일', '월', '화', '수', '목', '금', '토'] as const;

interface CalenderContentProps {
  currentMonth: Date;
  selectedDate: Date | null;
  setSelectedDate: (date: Date | null) => void;
}

export default function CalenderContent({
  currentMonth,
  selectedDate,
  setSelectedDate,
}: CalenderContentProps) {
  // 그 달의 주 별 첫 날 배열
  const firstDaysOfWeeks = eachWeekOfInterval({
    start: startOfMonth(currentMonth),
    end: endOfMonth(currentMonth),
  }); // 오브젝트 (배열 아님)

  // 주 별 날짜 배열
  const weeks = firstDaysOfWeeks.map((firstDay) =>
    eachDayOfInterval({ start: firstDay, end: addDays(firstDay, 6) }),
  );

  // console.log(weeks);

  return (
    <table className='w-full'>
      <thead className='border-gray5 border-b'>
        <tr>
          {days.map((day) => (
            <th key={days.indexOf(day)} className='text-h6 py-2 font-semibold'>
              {day}
            </th>
          ))}
        </tr>
      </thead>

      <tbody>
        {weeks.map((week, index) => (
          <Week
            key={index}
            nthWeek={index + 1}
            week={week}
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
          />
        ))}
      </tbody>
    </table>
  );
}
