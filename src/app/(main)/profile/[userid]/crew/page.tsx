'use client';

import { userInfoStore } from '@/entities/profile/UserInfoStore';
import SwiperCards from '@/widgets/profile/SwiperCards';
import { notFound } from 'next/navigation';

export default function CrewPage() {
  const { nickname, isMe } = userInfoStore((s) => s.userInfo);
  // const respones = {};

  if (!isMe) notFound();

  return (
    <div className='lg:h-screen lg:max-h-[675px] overflow-y-auto'>
      <SwiperCards category='myCrew' title={`✨ ${nickname}님의 크루모집`} />
      <SwiperCards
        category='appliedCrew'
        title={`✨ ${nickname}님이 지원한 크루 모집`}
        className='bg-mainWhite'
      />
      <SwiperCards
        category='favoritedCrew'
        title={`✨ ${nickname}님 즐겨찾기한 크루 모집`}
        className='bg-mainWhite'
      />
    </div>
  );
}
