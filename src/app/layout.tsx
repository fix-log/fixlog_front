import localFont from 'next/font/local';
import './globals.css';
import type { Metadata } from 'next';
import Header from '@/widgets/ui/Header';

export const metadata: Metadata = {
  title: 'fixlog',
  description: '협업 플랫폼',
};

const suit = localFont({
  src: [
    { path: './fonts/SUIT-Thin.woff2', weight: '100', style: 'normal' },
    { path: './fonts/SUIT-ExtraLight.woff2', weight: '200', style: 'normal' },
    { path: './fonts/SUIT-Light.woff2', weight: '300', style: 'normal' },
    { path: './fonts/SUIT-Regular.woff2', weight: '400', style: 'normal' },
    { path: './fonts/SUIT-Medium.woff2', weight: '500', style: 'normal' },
    { path: './fonts/SUIT-SemiBold.woff2', weight: '600', style: 'normal' },
    { path: './fonts/SUIT-Bold.woff2', weight: '700', style: 'normal' },
    { path: './fonts/SUIT-ExtraBold.woff2', weight: '800', style: 'normal' },
    { path: './fonts/SUIT-Heavy.woff2', weight: '900', style: 'normal' },
  ],
  variable: '--font-suit',
  display: 'swap',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko' className={suit.variable}>
      <body className='font-sans'>
        <Header />
        <main className='mx-auto flex min-h-[calc(100vh-110px)] w-full max-w-[1440px] flex-col items-center px-6 pt-[110px]'>
          {children}
        </main>
      </body>
    </html>
  );
}
