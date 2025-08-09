'use client';

import { userInfoStore } from '@/entities/userInfo/UserInfoStore';
import SwiperCards from '@/widgets/profile/SwiperCards';

export default function CrewPage() {
  const userNickname = userInfoStore((s) => s.userInfo.nickname);
  const respones = {};
  return (
    <div className='h-screen max-h-[675px] overflow-y-auto'>
      <SwiperCards category='myCrew' title={`✨ ${userNickname}님의 크루모집`} />
      <SwiperCards
        category='appliedCrew'
        title={`✨ ${userNickname}님이 지원한 크루 모집`}
        className='bg-mainWhite'
      />
      <SwiperCards
        category='favoritedCrew'
        title={`✨ ${userNickname}님 즐겨찾기한 크루 모집`}
        className='bg-mainWhite'
      />
    </div>
  );
}
