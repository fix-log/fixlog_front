import FixletterHeader from '@/widgets/fixletter/FixletterHeader';

export default function FixletterLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* 헤더는 전체 폭에 고정 */}
      <FixletterHeader />
      {/* 본문만 중앙정렬/고정폭 */}
      <main className='mx-auto w-full max-w-[1440px]'>{children}</main>
    </>
  );
}
