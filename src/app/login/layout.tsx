export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        {/* favicon 설정 */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <title>Fixlog</title>
      </head>
      <body>
        <div className="flex w-screen max-w-[500px] justify-center">{children}</div>
      </body>
    </html>
  );
}
