import Day from './Day';

interface WeekProps {
  nthWeek: number;
  week: Date[];
  selectedDate: Date;
  workroomId: string;
}

export default async function Week({ nthWeek, week, selectedDate, workroomId }: WeekProps) {
  return (
    <tr>
      {week.map((date) => (
        <Day
          key={week.indexOf(date)}
          date={date}
          nthWeek={nthWeek}
          selectedDate={selectedDate}
          workroomId={workroomId}
        />
      ))}
    </tr>
  );
}
