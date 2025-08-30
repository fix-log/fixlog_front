'use client';

import { userInfoStore } from '@/entities/profile/UserInfoStore';
import { colorChangeAnimation } from '@/shared/ui/Animation';
import { usePathname, useRouter } from 'next/navigation';
import { ReactNode } from 'react';

interface CategoryTabsProps {
  children: ReactNode;
}

export default function CategoryTabs({ children }: CategoryTabsProps) {
  // 마지막 세그먼트를 통해 카테고리 동적 변화
  const pathname = usePathname().split('/');
  const lastPathSegment = pathname[pathname.length - 1];

  const isMe = userInfoStore((s) => s.userInfo.isMe);
  const category = [
    { label: '유저 정보', value: 'info' },
    { label: '픽레드', value: 'fixred' },
    isMe ? { label: '크루 모집', value: 'crew' } : { label: '워크룸', value: 'workroom' },
  ];
  const router = useRouter();

  function selectedStyle(item: string) {
    if (lastPathSegment === item) return ' border-b-mainBlack text-black font-bold ';
    return '';
  }

  return (
    <div>
      <div className='border-gray4 text-gray4 mt-6 flex h-[53px] md:h-[90px] border-t w-full text-[14px] md:text-[20px]'>
        {category.map((item) => (
          <button
            key={item.value}
            onClick={() => {
              router.push(`${item.value}`);
            }}
            className={
              'border-gray4 h-full grow cursor-pointer border-b-2' +
              selectedStyle(item.value) +
              colorChangeAnimation
            }
          >
            {item.label}
          </button>
        ))}
      </div>
      <div className='bg-gray6 md:h-screen p-[5px] w-full'>{children}</div>
    </div>
  );
}
