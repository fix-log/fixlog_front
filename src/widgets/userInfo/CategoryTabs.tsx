import { userInfoStore } from '@/entities/userInfo/UserInfoStore';
import { colorChangeAnimation } from '@/shared/ui/Animation';
import { ReactNode, useState } from 'react';

interface CategoryTabsProps {
  children: ReactNode;
}

export default function CategoryTabs({ children }: CategoryTabsProps) {
  const isMe = userInfoStore((s) => s.userInfo.isMe);
  const category = ['유저 정보', '픽레드', isMe ? '크루 모집' : '워크룸'] as const;
  const [isSelectedCategory, setIsSelectedCategory] = useState('유저 정보');
  function selectedStyle(item: (typeof category)[number]) {
    if (isSelectedCategory === item) return ' border-b-mainBlack text-black font-bold ';
    return '';
  }

  return (
    <div>
      <div className='border-gray4 text-gray4 mt-6 flex h-[90px] border-t text-[20px]'>
        {category.map((item) => (
          <button
            key={item}
            onClick={() => setIsSelectedCategory(item)}
            className={
              'border-gray4 h-full grow cursor-pointer border-b-2' +
              selectedStyle(item) +
              colorChangeAnimation
            }
          >
            {item}
          </button>
        ))}
      </div>
      <div className='bg-gray6 h-screen p-[25px]'>{children}</div>
    </div>
  );
}
