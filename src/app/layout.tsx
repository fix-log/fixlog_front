import localFont from 'next/font/local';
import './globals.css';
import type { Metadata } from 'next';
import Header from '@/widgets/ui/Header';

export const metadata: Metadata = {
  title: 'fixlog',
  description: '협업 플랫폼',
};

const font = localFont({
  src: [
    {
      path: '../../public/fonts/SUIT-Regular.woff2',
      weight: '100 900',
    },
  ],
  display: 'swap',
  variable: '--font-suit',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko' className={font.variable}>
      <body className={font.className}>
        <Header />
        <main className='mx-auto flex min-h-[calc(100vh-110px)] w-full max-w-[1440px] flex-col items-center pt-[110px]'>
          {children}
        </main>
      </body>
    </html>
  );
}
