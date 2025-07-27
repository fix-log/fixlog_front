'use client';

import CategoryTabs from '@/widgets/userInfo/CategoryTabs';
import InfoButton from '@/widgets/userInfo/InfoButton';
import Profile from '@/features/userInfo/Profile';
import FetchMyFollowings from '@/features/user/api/FetchFollowings';
import FetchMyFollowers from '@/features/user/api/FetchFollowers';
import { userInfoStore } from '@/entities/userInfo/UserInfoStore';

export default function UserInfo() {
  const userid = userInfoStore((s) => s.userInfo.viewUserId);
  const following = FetchMyFollowings(userid);
  const totalFollower = FetchMyFollowers(userid).total_count;

  return (
    <>
      <div className='w-full cursor-default'>
        <div className='px-10 pt-12'>
          <Profile totalFollower={totalFollower} />
          <InfoButton />
        </div>
        <CategoryTabs />
        <svg className='bg-gray6 h-screen w-full'></svg>
      </div>
    </>
  );
}
