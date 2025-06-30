export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
    <div className='flex justify-center w-screen !m-0'>
        {children}
    </div>
    );
}
