export default function CrewDetailLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className='mx-auto flex w-full max-w-[1440px] flex-col px-4 py-8 sm:px-10 sm:py-12 md:px-16 md:py-16 lg:px-[120px] lg:py-[80px] xl:px-[180px] xl:py-[95px] 2xl:px-[240px]'>
      <div className='rounded-[20px] border border-[#E2E2E2] bg-white p-6 sm:p-8'>{children}</div>
    </main>
  );
}
