import SearResultNewCard from '@/shared/search/ui/SearResultNewCard';

interface PageProps {
  params: Promise<{ searchId: string }>;
}

export default async function Page({ params }: PageProps) {
  const { searchId } = await params;
  console.log(searchId);

  return (
    <div className='bg-gray6 mb-[80px] w-full'>
      <SearResultNewCard />
    </div>
  );
}
