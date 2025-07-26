import { redirect } from 'next/navigation';

import SearchHeader from '@/widgets/search/SearchHeader';
import SearchNav from '@/widgets/search/SearchNav';

interface PageProps {
  params: Promise<{ searchId: string }>;
}

export default async function Page({ params }: PageProps) {
  const { searchId } = await params;
  redirect(`/search/${searchId}/all`);

  return (
    <>
      <SearchHeader />
      <SearchNav searchId={String(searchId)} />
    </>
  );
}
