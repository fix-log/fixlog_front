import { redirect } from 'next/navigation';

interface PageProps {
  params: Promise<{ 'project-id': string }>;
}

export default async function Page({ params }: PageProps) {
  const { 'project-id': projectId } = await params;
  redirect(`/workroom/${projectId}/issue/all`);
}
