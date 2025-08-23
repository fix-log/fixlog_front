import '../globals.css';
import type { Metadata } from 'next';
import Header from '@/widgets/ui/Header';
import Footer from '@/widgets/ui/Footer';

export const metadata: Metadata = {
  title: 'fixlog',
  description: '협업 플랫폼',
};

// 해당 레이아웃이 적용되길 바란다면 (main) 폴더 안에 넣어주세요!
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <main className='mx-auto flex min-h-[calc(100vh-110px)] w-full max-w-[1440px] flex-col items-center px-6 pt-[110px]'>
        {children}
      </main>
      {/* <Footer /> */}
    </>
  );
}
