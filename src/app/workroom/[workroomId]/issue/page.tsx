import { redirect } from 'next/navigation';

interface PageProps {
  params: Promise<{ workroomId: string }>;
}

export default async function Page({ params }: PageProps) {
  const { workroomId } = await params;
  redirect(`/workroom/${workroomId}/issue/all`);
}
