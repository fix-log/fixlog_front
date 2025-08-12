'use client';

import { userInfoStore } from '@/entities/profile/UserInfoStore';
import SwiperCards from '@/widgets/profile/SwiperCards';

export default function CrewPage() {
  const userNickname = userInfoStore((s) => s.userInfo.nickname);
  const respones = {};
  return (
    <div className='h-screen max-h-[675px] overflow-y-auto'>
      <SwiperCards category='createdWorkroom' title={`👑 ${userNickname}님이 만든 워크룸`} />
      <SwiperCards
        category='joinedWorkroom'
        title={`👑 ${userNickname}님이 참여한 워크룸`}
        className='bg-mainWhite'
      />
    </div>
  );
}
