interface PageProps {
  params: Promise<{ searchId: string }>;
}

import SearchEmpty from '@/features/search/ui/SearchEmpty';

const hasSearch = true;

export default async function Page({ params }: PageProps) {
  const { searchId } = await params;

  if (!hasSearch) {
    return <SearchEmpty />;
  }

  return <div className='bg-gray6 mb-[80px] h-[100vh] w-full'></div>;
}
