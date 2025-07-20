import { redirect } from 'next/navigation';
import Calender from '@/features/schedule/ui/Calender';
import { validateDateParams } from '@/shared/lib/dateValidation';
import { getDate, getMonth, getYear } from 'date-fns';

interface LayoutProps {
  children: React.ReactNode;
  params: Promise<{
    workroomId: string;
    currentYear: string;
    currentMonth: string;
    currentDate: string;
  }>;
}

export default async function Layout({ children, params }: LayoutProps) {
  const { workroomId, currentYear, currentMonth, currentDate } = await params;

  // 날짜 검증
  const validation = validateDateParams(currentYear, currentMonth, currentDate);

  // 유효하지 않은 경우 오늘 날짜로 redirect
  if (!validation.isValid) {
    const today = new Date();
    redirect(
      `/workroom/${workroomId}/schedule/${getYear(today)}/${getMonth(today) + 1}/${getDate(today)}`,
    );
  }

  const selectedDate = validation.date;

  // TODO: 프로젝트 일정 데이터 가져오기 (선택된 일자가 포함된 월)

  return (
    // 데이터를 통째로 밑에 컴포넌트에 전달해서 하이드레이션 (오늘 일정 포함, 캘린더 전체 컴포넌트는 클라이언트 컴포넌트로)
    <section className='flex w-full gap-2 md:py-28'>
      <div className='border-gray5 w-2/3 rounded-[10px] border'>
        <Calender workroomId={workroomId} selectedDate={selectedDate} />
      </div>

      {children}
    </section>
  );
}
