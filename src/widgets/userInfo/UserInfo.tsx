'use client';

import CategoryTabs from '@/widgets/userInfo/CategoryTabs';
import InfoButton from '@/features/userInfo/InfoButton';
import Profile from '@/features/userInfo/Profile';

export default function UserInfo() {
  return (
    <>
      <div className='w-full cursor-default'>
        <div className='px-10 pt-12'>
          <Profile />
          <InfoButton />
        </div>
        <CategoryTabs />
        <svg className='bg-gray6 h-screen w-full'></svg>
      </div>
    </>
  );
}
