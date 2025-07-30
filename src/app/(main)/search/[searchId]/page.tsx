import { redirect } from 'next/navigation';

interface PageProps {
  params: Promise<{ searchId: string }>;
}

export default async function Page({ params }: PageProps) {
  const { searchId } = await params;
  redirect(`/search/${searchId}/all`);

  return null;
}
