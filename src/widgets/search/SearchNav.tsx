'use client';

import { NavigationItems } from '@/shared/types/navigation';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems: NavigationItems = [
  { name: '전체', href: '/search/id/all', content: 'all' },
  { name: '크루모집', href: '/search/id/searchcrew', content: 'searchcrew' },
  { name: '최신글', href: '/search/id/newestfixred', content: 'newestfixred' },
  { name: '인기글', href: '/search/id/popularityfixred', content: 'popularityfixred' },
  { name: '프로필', href: '/search/id/searchprofile', content: 'searchprofile' },
];

export default function SearchNav({ searchId }: { searchId: string }) {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <nav className='mt-[30px] w-full'>
      <ul className='flex w-full'>
        {navItems.map((item) => (
          <li key={item.href} className='flex h-[90px] w-1/5 items-center justify-center'>
            <Link
              href={item.href.replace('id', searchId)}
              className={`${
                pathname.includes(item.content!)
                  ? 'text-mainBlack border-mainBlack font-bold'
                  : 'text-gray4'
              } flex h-full w-full items-center justify-center border-b-3`}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
