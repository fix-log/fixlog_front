import SearchHeader from '@/widgets/search/SearchHeader';
import SearchNav from '@/widgets/search/SearchNav';

interface LayoutProps {
  params: Promise<{ searchId: string }>;
  children: React.ReactNode;
}

export default async function Layout({ params, children }: LayoutProps) {
  const { searchId } = await params;

  return (
    <>
      <div className='flex w-full flex-col items-center justify-center'>
        <SearchHeader />
      </div>
      <SearchNav searchId={searchId} />
      {children}
    </>
  );
}
