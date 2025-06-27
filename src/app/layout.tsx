import localFont from 'next/font/local';
import './globals.css';

const font = localFont({
    src: './SUIT-Regular.woff2',
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ko" className={font.className}>
            <body>{children}</body>
        </html>
    );
}
