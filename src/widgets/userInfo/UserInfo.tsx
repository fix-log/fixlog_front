'use client';

import CategoryTabs from '@/widgets/userInfo/CategoryTabs';
import InfoButton from '@/widgets/userInfo/InfoButton';
import Profile from '@/features/userInfo/Profile';
import FetchMyFollowings from '@/features/user/api/FetchFollowings';
import FetchMyFollowers from '@/features/user/api/FetchFollowers';
import { userInfoStore } from '@/entities/userInfo/UserInfoStore';
import { ReactNode, useState } from 'react';
import Modal from '@/shared/ui/Modal';
import FollowModal from './FollowModal';

interface UserInfoProps {
  children: ReactNode;
}

export default function UserInfo({ children }: UserInfoProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const userid = userInfoStore((s) => s.userInfo.viewUserId);

  const following = FetchMyFollowings(userid);
  const follower = FetchMyFollowers(userid);
  const follow = {
    following: following,
    follower: follower,
  };

  const followingIds = Object.values(following.following).map((item) => item.user_id);

  return (
    <>
      <div className='w-full cursor-default'>
        <div className='px-10 pt-12'>
          <Profile totalFollower={follower.total_count} setIsModalOpen={setIsModalOpen} />
          <InfoButton followingIds={followingIds} />
        </div>
        <CategoryTabs children={children} />
        {isModalOpen && (
          <Modal setIsOpen={setIsModalOpen}>
            <FollowModal
              setIsOpen={setIsModalOpen}
              followData={follow}
              followingIds={followingIds}
            />
          </Modal>
        )}
      </div>
    </>
  );
}
