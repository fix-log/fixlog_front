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
    <header className='fixed top-0 right-0 left-0 z-10 flex h-[110px] justify-center bg-white'>
      <div className='flex h-full w-full max-w-[1440px] items-center justify-between'>
        {/* 로고 */}
        <Link href='/' className='flex items-center'>
          <Image src='/fixlog.png' alt='fixlog 로고' width={100} height={51} priority />
        </Link>

        {/* 메뉴 */}
        <nav className='ml-[143px] flex flex-1 items-center gap-12'>
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

        {/* 오른쪽 영역 (검색, 로그인 버튼 등 들어갈 자리) */}
        <div className='text-[18px]'>
          <Link href='/login' className='!ml-[46px]'>
            로그인
          </Link>
          <Link
            href='/login/signup/step1'
            className='bg-mainRed text-mainWhite !ml-[46px] rounded-[5px] !p-[8px_21px] !pb-[9px]'
          >
            회원가입
          </Link>
        </div>
      </div>
    </header>
  );
}
