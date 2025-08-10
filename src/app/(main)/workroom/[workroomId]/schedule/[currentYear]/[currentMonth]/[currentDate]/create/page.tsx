import ScheduleForm from '@/features/schedule/ui/ScheduleForm';

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
  const selectedDate = new Date(
    parseInt(currentYear),
    parseInt(currentMonth) - 1,
    parseInt(currentDate),
  );

  return (
    <section className='border-gray5 flex w-1/3 flex-col rounded-[10px] border'>
      <ScheduleForm workroomId={workroomId} selectedDate={selectedDate} />
    </section>
  );
}
