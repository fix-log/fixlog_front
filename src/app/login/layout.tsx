export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <div className="flex w-screen max-w-[500px] justify-center">{children}</div>
      </body>
    </html>
  );
}
