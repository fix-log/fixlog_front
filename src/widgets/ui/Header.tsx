import Link from 'next/link';
import Image from 'next/image';
import { NavigationItems } from '@/shared/types/navigation';

const navItems: NavigationItems = [
  { name: '크루모집', href: '/crew' },
  { name: '워크룸', href: '/workroom' },
  { name: '픽레드', href: '/fixred' },
];

// 임시 로그인 여부 (나중에 전역 상태로 바꿔야댐 true 로 하면 로그인 후 헤더로 변경)
const isLoggedIn = false;

export default function Header() {
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
              className='text-[24px] leading-[130%] text-zinc-800 hover:text-mainRed'
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
            <button>
              <Image src='/icon_message.png' alt='메시지' width={20} height={20} />
            </button>
            <button>
              <Image src='/icon_profile.png' alt='프로필' width={56} height={56} />
            </button>
          </div>
        ) : (
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
        )}
      </div>
    </header>
  );
}
