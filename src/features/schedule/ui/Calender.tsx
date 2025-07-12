'use client';

import { useState } from 'react';
import CalenderContent from './CalenderContent';
import CalenderHeader from './CalenderHeader';
import {
  // getDate,
  getMonth,
} from 'date-fns';

// TODO: 상수로 분리 (임시)
// const months = [
//   'January',
//   'February',
//   'March',
//   'April',
//   'May',
//   'June',
//   'July',
//   'August',
//   'September',
//   'October',
//   'November',
//   'December',
// ];

// 구글 캘린더 베끼기
// TODO: URL에 날짜 파라미터 넣어서 히스토리 처리 가능해야함
// TODO: 이전, 다음 달 버튼 -> 이전, 다음 달 1일로 이동
// TODO: 해당 날짜 일정이 오른쪽 패널에 표시되어야 함 (형제 컴포넌트)
// TODO:

export default function Calender() {
  const today = new Date();
  // const dateOfToday = getDate(today);
  const [month, setMonth] = useState<number>(getMonth(today));
  console.log(today);

  return (
    <section className='px-3 py-[6px]'>
      <CalenderHeader month={month} setMonth={setMonth} />
      <CalenderContent />
    </section>
  );
}
