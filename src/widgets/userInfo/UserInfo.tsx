'use client';

import InfoButton from '@/features/userInfo/InfoButton';
import Profile from '@/features/userInfo/Profile';

export default function UserInfo() {
  return (
    <div className='w-full cursor-default px-10 pt-12'>
      <Profile />
      <InfoButton />
    </div>
  );
}
