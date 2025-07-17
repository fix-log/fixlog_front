'use client';

import Day from './Day';

interface WeekProps {
  nthWeek: number;
  week: Date[];
  selectedDate: Date | null;
  setSelectedDate: (date: Date | null) => void;
}

export default function Week({ nthWeek, week, selectedDate, setSelectedDate }: WeekProps) {
  return (
    <tr>
      {week.map((date) => (
        <Day
          key={week.indexOf(date)}
          date={date}
          nthWeek={nthWeek}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />
      ))}
    </tr>
  );
}
