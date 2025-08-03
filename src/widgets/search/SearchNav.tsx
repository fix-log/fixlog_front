'use client';
//NavigationItems 일단 워크룸 거 쓰는 중~
import { NavigationItems } from '@/shared/types/navigation';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const navItems: NavigationItems = [
  { name: '전체', href: '/search/id/all', content: 'all' },
  { name: '크루모집', href: '/search/id/searchcrew', content: 'searchcrew' },
  { name: '최신 픽레드', href: '/search/id/newestfixred', content: 'newestfixred' },
  { name: '인기 픽레드', href: '/search/id/popularityfixred', content: 'popularityfixred' },
  { name: '프로필', href: '/search/id/searchprofile', content: 'searchprofile' },
];

const hasSearch = true;

export default function SearchNav({ searchId }: { searchId: string }) {
  const pathname = usePathname();

  console.log('현재 URL:', pathname);

  return (
    <nav className='mt-[30px] w-full'>
      <ul className='flex w-full'>
        {navItems.map((item) => (
          <li key={item.href} className='flex h-[90px] w-1/5 items-center justify-center'>
            {hasSearch ? (
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
            ) : (
              <div
                className={`${
                  pathname.includes(item.content!)
                    ? 'text-mainBlack border-mainBlack cursor-pointer font-bold'
                    : 'text-gray4 disabled cursor-default'
                } flex h-full w-full items-center justify-center border-b-3`}
              >
                {item.name}
              </div>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
