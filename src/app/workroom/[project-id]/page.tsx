import { redirect } from 'next/navigation';

interface PageProps {
  params: { 'project-id': string };
}

export default async function Page({ params }: PageProps) {
  redirect(`/workroom/${params['project-id']}/info`);
}
