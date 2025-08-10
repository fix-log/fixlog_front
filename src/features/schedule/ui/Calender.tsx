import CalenderContent from './CalenderContent';
import CalenderHeader from './CalenderHeader';

// 구글 캘린더 베끼기
// TODO: URL에 날짜 파라미터 넣어서 히스토리 처리 가능해야함
// TODO: 해당 날짜 일정이 오른쪽 패널에 표시되어야 함 (형제 컴포넌트)
// TODO: 이전 달, 다음 달 날짜는 회색으로
// TODO: currentDate와 selectedDay 전역 상태로 관리? (zustand)

interface CalenderProps {
  workroomId: string;
  selectedDate: Date;
}

export default async function Calender({ workroomId, selectedDate }: CalenderProps) {
  return (
    <section className='px-3 py-[6px]'>
      <CalenderHeader workroomId={workroomId} selectedDate={selectedDate} />
      <CalenderContent workroomId={workroomId} selectedDate={selectedDate} />
    </section>
  );
}
