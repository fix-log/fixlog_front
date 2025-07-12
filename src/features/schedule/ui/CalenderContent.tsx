'use client';

import Week from './Week';

// TODO: 상수로 분리 (임시)
const days = ['일', '월', '화', '수', '목', '금', '토'];

// TODO: 오늘 날짜 인자로 받아서, 주 나누기
const weeks = [
  {
    nth: 1,
    days: [1, 2, 3, 4, 5, 6, 7],
  },
  {
    nth: 2,
    days: [8, 9, 10, 11, 12, 13, 14],
  },
  {
    nth: 3,
    days: [15, 16, 17, 18, 19, 20, 21],
  },
  {
    nth: 4,
    days: [22, 23, 24, 25, 26, 27, 28],
  },
  {
    nth: 5,
    days: [29, 30, 31, 1, 2, 3, 4],
  },
];

export default function CalenderContent() {
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
        {weeks.map((week) => (
          <Week key={week.nth} week={week} />
        ))}
      </tbody>
    </table>
  );
}
