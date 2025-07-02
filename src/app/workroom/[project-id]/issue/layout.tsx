import { NavigationItems } from '@/shared/types/navigation';
import Link from 'next/link';

interface LayoutProps {
  params: { 'project-id': string };
  children: React.ReactNode;
}

const navItems: NavigationItems = [
  { name: '모든 이슈', href: '/workroom/id/issue/all' },
  { name: '내 이슈', href: '/workroom/id/issue/mine' },
];

export default async function Layout({ params, children }: LayoutProps) {
  const { 'project-id': projectId } = params;

  return (
    <>
      <nav>
        <ul className='flex gap-4'>
          {navItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href.replace('id', projectId)}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
      {children}
    </>
  );
}
