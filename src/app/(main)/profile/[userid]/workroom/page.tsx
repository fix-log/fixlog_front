'use client';

import { userInfoStore } from '@/entities/profile/UserInfoStore';
import SwiperCards from '@/widgets/profile/SwiperCards';
import { notFound } from 'next/navigation';

export default function WorkroomPage() {
  const { nickname, isMe } = userInfoStore((s) => s.userInfo);
  // const respones = {};

  if (isMe) notFound();

  return (
    <div className='h-screen max-h-[675px] overflow-y-auto'>
      <SwiperCards category='createdWorkroom' title={`👑 ${nickname}님이 만든 워크룸`} />
      <SwiperCards
        category='joinedWorkroom'
        title={`👑 ${nickname}님이 참여한 워크룸`}
        className='bg-mainWhite'
      />
    </div>
  );
}
