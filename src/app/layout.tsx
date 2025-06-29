import './globals.css';
import type { Metadata } from 'next';
import Header from '@/shared/ui/Header';

export const metadata: Metadata = {
  title: 'fixlog',
  description: '협업 플랫폼',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='ko'>
      <body className='min-h-screen bg-white text-zinc-900'>
        <Header />
        <main className='min-h-[calc(100vh-110px)]'>
          <div className='mx-auto max-w-[1440px] px-4'>{children}</div>
        </main>
      </body>
    </html>
  );
}
