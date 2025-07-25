'use client';

import CategoryTabs from '@/widgets/userInfo/CategoryTabs';
import InfoButton from '@/widgets/userInfo/InfoButton';
import Profile from '@/features/userInfo/Profile';
import { useParams } from 'next/navigation';
import { isLoginedStore } from '@/entities/auth/IsLoginedStore';

export default function UserInfo() {
  const { userId } = isLoginedStore();
  const viewedUserId = Number(useParams().userid);
  const userValue = {
    viewedUserId: viewedUserId,
    myUserId: userId,
    isMe: userId === viewedUserId,
  };

  return (
    <>
      <div className='w-full cursor-default'>
        <div className='px-10 pt-12'>
          <Profile isMe={userValue.isMe} viewedUserId={userValue.viewedUserId} />
          <InfoButton isMe={userValue.isMe} />
        </div>
        <CategoryTabs isMe={userValue.isMe} />
        <svg className='bg-gray6 h-screen w-full'></svg>
      </div>
    </>
  );
}
