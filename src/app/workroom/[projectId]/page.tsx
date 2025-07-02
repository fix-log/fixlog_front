import { redirect } from 'next/navigation';

interface PageProps {
  params: Promise<{ projectId: string }>;
}

export default async function Page({ params }: PageProps) {
  const { projectId } = await params;
  redirect(`/workroom/${projectId}/info`);
}
