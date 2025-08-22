import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const userStatus = cookieStore.get('userStatus')?.value;
  if (userStatus) redirect('/');
  return (
    <div className='flex w-screen max-w-[500px] flex-col justify-center pb-[100px] px-5'>{children}</div>
  );
}
