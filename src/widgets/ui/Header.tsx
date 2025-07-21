'use client';

import Link from 'next/link';
import Image from 'next/image';
import { NavigationItems } from '@/shared/types/navigation';
import { isLoginedStore } from '@/entities/auth/IsLoginedStore';
import { hasHydratedStore } from '@/entities/model/HasHydratedStore';
import { useEffect } from 'react';

const navItems: NavigationItems = [
  { name: '크루모집', href: '/crew' },
  { name: '워크룸', href: '/workroom' },
  { name: '픽레드', href: '/fixred' },
];

export default function Header() {
  const { isLoggedIn } = isLoginedStore();

  // 로그인 버튼 부분 깜빡임등으로 UX 관련 문제 때문에 추가 (hasHydrated)
  const { hasHydrated, setHasHydrated } = hasHydratedStore();

  useEffect(() => {
    setHasHydrated();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!hasHydrated) return;

  return (
    <header className='fixed top-0 right-0 left-0 z-10 flex h-[110px] justify-center bg-white'>
      <div className='flex h-full w-full max-w-[1440px] items-center justify-between px-6'>
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
              className='hover:text-mainRed text-[20px] font-bold text-zinc-800'
            >
              {item.name}
            </Link>
          ))}
        </nav>
        {isLoggedIn ? (
          <div className='flex items-center gap-10'>
            <button>
              <Image src='/icon_search.png' alt='검색' width={20} height={20} />
            </button>
            <button>
              <Image src='/icon_notification.png' alt='알림' width={20} height={20} />
            </button>
            <Link href='/fixletter' aria-label='픽레터로 이동'>
              <Image src='/icon_message.png' alt='메시지' width={20} height={20} />
            </Link>
            <button>
              <Image src='/icon_profile.png' alt='프로필' width={56} height={56} />
            </button>
          </div>
        ) : (
          <div className='flex items-center gap-[46px]'>
            <Link href='/login' className='text-body-l text-zinc-800'>
              로그인
            </Link>
            <Link
              href='/login/signup'
              className='bg-mainRed text-mainWhite text-body-l rounded-[5px] p-[8px_21px] pb-[9px] font-bold'
            >
              회원가입
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
