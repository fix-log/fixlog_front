import { redirect } from 'next/navigation';

interface PageProps {
    params: { 'workroom-id': string };
}

export default async function Page({ params }: PageProps) {
    const { 'workroom-id': workroomId } = params;
    redirect(`/workroom/${workroomId}/issue/all`);
}
