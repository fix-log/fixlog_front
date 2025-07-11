'use client';

import Day from './Day';

// TODO: 한주의 일 배열 인자로 받아오기 (임시)
const datesOfWeek = [1, 2, 3, 4, 5, 6, 7];

export default function Week() {
  return (
    <tr>
      {datesOfWeek.map((date) => (
        <Day key={datesOfWeek.indexOf(date)} date={date} />
      ))}
    </tr>
  );
}
