import { getDate, getMonth, getYear } from 'date-fns';
import { redirect } from 'next/navigation';

interface PageProps {
  params: Promise<{ workroomId: string; currentYear: string }>;
}

export default async function Page({ params }: PageProps) {
  const { workroomId, currentYear } = await params;
  const firstDateOfYear = new Date(parseInt(currentYear), 0, 1);
  redirect(
    `/workroom/${workroomId}/schedule/${getYear(firstDateOfYear)}/${getMonth(firstDateOfYear) + 1}/${getDate(firstDateOfYear)}`,
  );
}
