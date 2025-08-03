import SearResultCrewCard from '@/shared/search/ui/SearResultCrewCard';

interface PageProps {
  params: Promise<{ searchId: string }>;
}

export default async function Page({ params }: PageProps) {
  const { searchId } = await params;
  console.log(searchId);

  return (
    <div className='bg-gray6 mb-[80px] w-full'>
      <SearResultCrewCard />
    </div>
  );
}
