'use client';

import { NavigationItems } from '@/shared/types/navigation';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems: NavigationItems = [
  { name: '소개', href: '/workroom/id/info', content: 'info' },
  { name: '멤버', href: '/workroom/id/member', content: 'member' },
  { name: '이슈', href: '/workroom/id/issue', content: 'issue' },
  { name: '일정', href: '/workroom/id/schedule', content: 'schedule' },
  { name: '관리', href: '/workroom/id/admin', content: 'admin' },
];

export default function ProjectNav({ workroomId }: { workroomId: string }) {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <nav className='w-full'>
      <ul className='flex w-full'>
        {navItems.map((item) => (
          <li key={item.href} className='flex h-[90px] w-1/5 items-center justify-center'>
            <Link
              href={item.href.replace('id', workroomId)}
              className={`${
                pathname.includes(item.content!) ? 'text-mainBlack border-mainBlack' : 'text-gray4'
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

// 유저 권한 체크하고, 메뉴 비활성화 (관리) 기능 추가할 때, features로 가져가기
