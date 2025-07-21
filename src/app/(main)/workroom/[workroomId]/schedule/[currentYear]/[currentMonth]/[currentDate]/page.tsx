import DailySchedule from '@/features/schedule/ui/DailySchedule';

interface PageProps {
  params: Promise<{
    workroomId: string;
    currentYear: string;
    currentMonth: string;
    currentDate: string;
  }>;
}

export default async function Page({ params }: PageProps) {
  const { workroomId, currentYear, currentMonth, currentDate } = await params;

  // 날짜 검증은 Layout에서 완료.
  const selectedDate = new Date(
    parseInt(currentYear),
    parseInt(currentMonth) - 1,
    parseInt(currentDate),
  );

  return <DailySchedule workroomId={workroomId} selectedDate={selectedDate} />;
}
