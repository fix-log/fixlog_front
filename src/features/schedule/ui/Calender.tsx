'use client';

import { useState } from 'react';
import CalenderContent from './CalenderContent';
import CalenderHeader from './CalenderHeader';
import { startOfMonth } from 'date-fns';

// 구글 캘린더 베끼기
// TODO: URL에 날짜 파라미터 넣어서 히스토리 처리 가능해야함
// TODO: 해당 날짜 일정이 오른쪽 패널에 표시되어야 함 (형제 컴포넌트)
// TODO: 이전 달, 다음 달 날짜는 회색으로
// TODO: currentDate와 selectedDay 전역 상태로 관리? (zustand)

interface CalenderProps {
  initialMonth: Date; // 표시할 연월 (해당 월 1일)
  initialDate?: Date; // 선택된 날짜 (없으면 날짜 선택 안된 상태)
}

export default function Calender({ initialMonth, initialDate }: CalenderProps) {
  const [currentMonth, setCurrentMonth] = useState(startOfMonth(initialMonth));
  const [selectedDate, setSelectedDate] = useState<Date | null>(initialDate ?? null);

  return (
    <section className='px-3 py-[6px]'>
      <CalenderHeader currentMonth={currentMonth} setCurrentMonth={setCurrentMonth} />
      <CalenderContent
        currentMonth={currentMonth}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />
    </section>
  );
}
