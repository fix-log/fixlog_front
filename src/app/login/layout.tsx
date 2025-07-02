export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className='flex w-screen max-w-[500px] justify-center'>{children}</div>;
}
