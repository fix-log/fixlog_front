import { userInfoStore } from '@/entities/userInfo/UserInfoStore';
import { colorChangeAnimation } from '@/shared/ui/Animation';
import { useRouter } from 'next/navigation';
import { ReactNode, useState } from 'react';

type dd = {
  label: string;
  value: string;
};

interface CategoryTabsProps {
  children: ReactNode;
}

export default function CategoryTabs({ children }: CategoryTabsProps) {
  const isMe = userInfoStore((s) => s.userInfo.isMe);
  const category = [
    { label: '유저 정보', value: 'info' },
    { label: '픽레드', value: 'fixred' },
    isMe ? { label: '크루 모집', value: 'crew' } : { label: '워크룸', value: 'workroom' },
  ];
  const [isSelectedCategory, setIsSelectedCategory] = useState('유저 정보');
  const router = useRouter();
  function selectedStyle(item: string) {
    if (isSelectedCategory === item) return ' border-b-mainBlack text-black font-bold ';
    return '';
  }

  return (
    <div>
      <div className='border-gray4 text-gray4 mt-6 flex h-[90px] border-t text-[20px]'>
        {category.map((item) => (
          <button
            key={item.label}
            onClick={() => {
              setIsSelectedCategory(item.label)
              router.push(`${item.value}`);
            }}
            className={
              'border-gray4 h-full grow cursor-pointer border-b-2' +
              selectedStyle(item.label) +
              colorChangeAnimation
            }
          >
            {item.label}
          </button>
        ))}
      </div>
      <div className='bg-gray6 h-screen p-[5px]'>{children}</div>
    </div>
  );
}
