import localFont from 'next/font/local';
import './globals.css';
import type { Metadata } from 'next';
import { cookies } from 'next/headers';
import LoginSync from './LoginSync';

export const metadata: Metadata = {
  title: 'fixlog',
  description: '협업 플랫폼',
};

const suit = localFont({
  src: [
    { path: '../../public/fonts/SUIT-Thin.woff2', weight: '100', style: 'normal' },
    { path: '../../public/fonts/SUIT-ExtraLight.woff2', weight: '200', style: 'normal' },
    { path: '../../public/fonts/SUIT-Light.woff2', weight: '300', style: 'normal' },
    { path: '../../public/fonts/SUIT-Regular.woff2', weight: '400', style: 'normal' },
    { path: '../../public/fonts/SUIT-Medium.woff2', weight: '500', style: 'normal' },
    { path: '../../public/fonts/SUIT-SemiBold.woff2', weight: '600', style: 'normal' },
    { path: '../../public/fonts/SUIT-Bold.woff2', weight: '700', style: 'normal' },
    { path: '../../public/fonts/SUIT-ExtraBold.woff2', weight: '800', style: 'normal' },
    { path: '../../public/fonts/SUIT-Heavy.woff2', weight: '900', style: 'normal' },
  ],
  display: 'swap',
  variable: '--font-suit',
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookie = await cookies();
  const userId = cookie.get('userId')?.value;
  return (
    <html lang='ko' className={suit.className}>
      <body className={suit.className}>
        {userId && <LoginSync id={Number(userId)} />}
        {children}
      </body>
    </html>
  );
}
