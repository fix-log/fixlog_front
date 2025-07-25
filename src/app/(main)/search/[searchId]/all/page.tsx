interface PageProps {
  params: Promise<{ searchId: string }>;
}

import SearchEmpty from '@/features/search/ui/SearchEmpty';
import SearchLayout from '@/shared/search/ui/SearchLayout';
import SearCrewCard from '@/shared/search/ui/SearCrewCard';

const hasSearch = true;

export default async function Page({ params }: PageProps) {
  const { searchId } = await params;

  if (!hasSearch) {
    return <SearchEmpty />;
  }

  return (
    <div className='bg-gray6 mb-[80px] h-[100vh] w-full'>
      <SearchLayout title='크루모집' searchId={searchId}>
        <SearCrewCard />
      </SearchLayout>
    </div>
  );
}
