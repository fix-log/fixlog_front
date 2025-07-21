import Schedule from './Schedule';
import DailyScheduleButtons from './DailyScheduleButtons';
import { getDate, getDay, getMonth, getYear } from 'date-fns';

// TODO: 타입 위치 옮기기
const DAYS = [
  { index: 0, day: '일요일' },
  { index: 1, day: '월요일' },
  { index: 2, day: '화요일' },
  { index: 3, day: '수요일' },
  { index: 4, day: '목요일' },
  { index: 5, day: '금요일' },
  { index: 6, day: '토요일' },
] as const;

interface DailyScheduleProps {
  workroomId: string;
  selectedDate: Date;
}

export default async function DailySchedule({ workroomId, selectedDate }: DailyScheduleProps) {
  return (
    <section className='border-gray5 flex w-1/3 flex-col rounded-[10px] border'>
      <div className='text-h4 flex h-30 items-center px-4 font-extrabold'>
        {getYear(selectedDate)}.{getMonth(selectedDate) + 1}.{getDate(selectedDate)}.
        {DAYS[getDay(selectedDate)].day}
      </div>
      {/* 수정/삭제 드롭다운 하나만 열리게 해야하나? */}
      {/* 높이 제한: 스케쥴 많아지면 스크롤 나와야함 (overflow-y-scroll 만 가지고 작동 안함) */}
      <ul className='border-gray5 grow border-y'>
        <Schedule />
        <Schedule />
        <Schedule />
      </ul>

      <DailyScheduleButtons />
    </section>
  );
}
