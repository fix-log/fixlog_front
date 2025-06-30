'use client';

import Link from 'next/link';
import Image from 'next/image';
import { NavigationItems } from '@/shared/types/navigation';

const navItems: NavigationItems = [
  { name: '크루모집', href: '/crew' },
  { name: '워크룸', href: '/workroom' },
  { name: '픽레드', href: '/fixred' },
];

export default function Header() {
  return (
    <header className='h-[110px]'>
      <div className='mx-auto flex max-w-screen-xl items-center justify-between px-4 pt-[33px] pb-[26px]'>
        {/* 로고 + 메뉴 */}
        <div className='flex items-center'>
          <Link href='/' className='flex items-center'>
            <Image src='/fixlog.png' alt='fixlog 로고' width={100} height={51} priority />
          </Link>

          {/* 메뉴 */}
          <nav className='ml-[143px] flex items-center gap-12'>
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className='text-[24px] leading-[130%] text-zinc-800 hover:text-orange-600'
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>

        {/* 오른쪽 영역 (검색, 로그인 버튼 등 들어갈 자리) */}
        <div>{/* 요기 */}</div>
      </div>
    </header>
  );
}
