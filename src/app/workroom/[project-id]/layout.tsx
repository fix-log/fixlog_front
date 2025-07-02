import ProjectNav from '@/widgets/ui/ProjectNav';

interface LayoutProps {
  params: Promise<{ 'project-id': string }>;
  children: React.ReactNode;
}

export default async function Layout({ params, children }: LayoutProps) {
  const { 'project-id': projectId } = await params;

  return (
    <>
      <div className='border-gray6 my-[42px] flex h-[164px] w-full flex-col items-center justify-center gap-2 rounded-[10px] border-2 max-md:hidden'>
        <span className='text-gray3 text-xl'>프로젝트</span>
        <h2 className='text-[42px] font-extrabold'>프로젝트 제목</h2>
      </div>
      <ProjectNav projectId={projectId} />
      {children}
    </>
  );
}
