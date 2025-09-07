'use client';

import CategoryTabs from '@/widgets/profile/CategoryTabs';
import InfoButton from '@/widgets/profile/InfoButton';
import Profile from '@/features/profile/Profile';
import FetchMyFollowings from '@/features/user/api/FetchFollowings';
import FetchMyFollowers from '@/features/user/api/FetchFollowers';
import { ReactNode, useState } from 'react';
import { userInfoStore } from '@/entities/profile/UserInfoStore';
import Modal from '@/shared/ui/Modal';
import FollowModal from './FollowModal';
import { useMediaQuery } from '@/shared/hooks/useMediaQuery';
import { AnimatePresence, motion } from 'motion/react';
import FollowModalMobile from './FollowModalMobile';

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
  const isDesktop = useMediaQuery() === 'desktop';

  return (
    <>
      <div className='w-full cursor-default'>
        <div className='px-3 pt-12 md:px-10'>
          <Profile totalFollower={follower.total_count} setIsModalOpen={setIsModalOpen} />
          <InfoButton followingIds={followingIds} />
        </div>
        <CategoryTabs>{children}</CategoryTabs>
        {isDesktop ? (
          isModalOpen && (
            <Modal
              setIsOpen={setIsModalOpen}
              className='top-auto h-auto min-h-[90vh] w-screen rounded-b-none md:inset-0 md:h-fit md:min-h-auto md:w-fit md:rounded-[5px]'
            >
              <FollowModal
                setIsOpen={setIsModalOpen}
                followData={follow}
                followingIds={followingIds}
              />
            </Modal>
          )
        ) : (
          <AnimatePresence>
            {isModalOpen && (
              <>
                <div
                  className='fixed inset-0 z-90 bg-black/30'
                  onClick={() => setIsModalOpen(false)}
                />
                <section className='fixed bottom-0 z-100 w-screen flex-col items-center justify-center bg-white/0'>
                  <motion.div
                    initial={{ y: '100%' }}
                    animate={{ y: 0 }}
                    exit={{ y: '100%' }}
                    transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                  >
                    <div className='h-full rounded-b-none rounded-[12px] bg-white'>
                      <FollowModal
                        setIsOpen={setIsModalOpen}
                        followData={follow}
                        followingIds={followingIds}
                      />
                    </div>
                  </motion.div>
                </section>
              </>
            )}
          </AnimatePresence>
        )}
      </div>
    </>
  );
}
