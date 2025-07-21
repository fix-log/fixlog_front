import { getDate, getMonth, getYear } from 'date-fns';
import { redirect } from 'next/navigation';

interface PageProps {
  params: Promise<{ workroomId: string; currentYear: string; currentMonth: string }>;
}

export default async function Page({ params }: PageProps) {
  const { workroomId, currentYear, currentMonth } = await params;
  const firstDateOfMonth = new Date(parseInt(currentYear), parseInt(currentMonth) - 1, 1);
  redirect(
    `/workroom/${workroomId}/schedule/${getYear(firstDateOfMonth)}/${getMonth(firstDateOfMonth) + 1}/${getDate(firstDateOfMonth)}`,
  );
}
