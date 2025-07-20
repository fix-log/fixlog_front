import { getDate, getMonth, getYear } from 'date-fns';
import { redirect } from 'next/navigation';

interface PageProps {
  params: Promise<{ workroomId: string }>;
}

export default async function Page({ params }: PageProps) {
  const { workroomId } = await params;
  const today = new Date();
  redirect(
    `/workroom/${workroomId}/schedule/${getYear(today)}/${getMonth(today) + 1}/${getDate(today)}`,
  );
}
