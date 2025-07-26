interface PageProps {
  params: Promise<{ searchId: string }>;
}

import SearchEmpty from '@/features/search/ui/SearchEmpty';
import SearchLayout from '@/shared/search/ui/SearchLayout';
import SearCrewCard from '@/shared/search/ui/SearCrewCard';
import SearFeedCard from '@/shared/search/ui/SearFeedCard';
import SearNewFeedCard from '@/shared/search/ui/SearNewFeedCard';

import SearProfileCard from '@/shared/search/ui/SearProfileCard';

const hasSearch = true;

export default async function Page({ params }: PageProps) {
  const { searchId } = await params;

  if (!hasSearch) {
    return <SearchEmpty />;
  }

  return (
    <div className='bg-gray6 mb-[80px] w-full'>
      <SearchLayout title='크루모집' searchId={searchId}>
        <SearCrewCard />
      </SearchLayout>
      <SearchLayout title='프로필' searchId={searchId}>
        <SearProfileCard />
      </SearchLayout>
      <SearchLayout title='인기 픽레드' searchId={searchId}>
        <SearFeedCard />
      </SearchLayout>
      <SearchLayout title='최신 픽레드' searchId={searchId}>
        <SearNewFeedCard />
      </SearchLayout>
    </div>
  );
}
