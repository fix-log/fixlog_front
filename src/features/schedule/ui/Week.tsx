'use client';

import Day from './Day';

interface WeekProps {
  week: {
    nth: number;
    days: number[];
  };
}

// TODO: 한주의 일 배열 인자로 받아오기 (임시)
export default function Week({ week }: WeekProps) {
  return (
    <tr>
      {week.days.map((date) => (
        <Day key={week.days.indexOf(date)} date={date} />
      ))}
    </tr>
  );
}
