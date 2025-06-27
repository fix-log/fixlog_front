import { redirect } from 'next/navigation';

interface PageProps {
    params: { 'workroom-id': string };
}

export default async function Page({ params }: PageProps) {
    redirect(`/workroom/${params['workroom-id']}/info`);
}
