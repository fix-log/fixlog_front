'use client';

import Week from './Week';

// TODO: 상수로 분리 (임시)
const days = ['일', '월', '화', '수', '목', '금', '토'];

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
        <Week />
        <Week />
        <Week />
        <Week />
        <Week />
      </tbody>
    </table>
  );
}
