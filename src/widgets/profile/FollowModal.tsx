'use clinet';

import { followData } from '@/features/user/api/Types';
import { colorChangeAnimation } from '@/shared/ui/Animation';
import { X } from 'lucide-react';
import { Dispatch, SetStateAction, useState } from 'react';
import FollowButton from './FollowButton';
import { cn } from '@/shared/lib/util';
import { useMediaQuery } from '@/shared/hooks/useMediaQuery';

type followTap = 'follower' | 'following';

interface FollowModalProps {
  followData: {
    follower: followData;
    following: followData;
  };
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  followingIds: number[];
}

export default function FollowModal({ followData, setIsOpen, followingIds }: FollowModalProps) {
  const [followTap, setFollowTap] = useState<followTap>('follower');
  const isDesktop = useMediaQuery() === 'desktop';

  return (
    <div id='follow-container' className='md:h-[80vh] md:w-[600px]'>
      <div
        id='close-follow-modal'
        className={
          'text-gray3 hover:text-mainRed mx-auto mt-[11px] cursor-pointer md:mr-[6px] md:ml-auto md:h-[30px] md:w-[30px]' +
          colorChangeAnimation
        }
      >
        {isDesktop ? (
          <X onClick={() => setIsOpen(false)} />
        ) : (
          <svg className='bg-gray1 mt-[6px] h-[6px] w-[67px] mx-auto rounded-full'></svg>
        )}
      </div>

      {/* // 팔로워, 팔로우 */}
      <div
        id='follow-tap'
        className='text-gray4 flex justify-between text-[14px] font-extrabold md:text-[18px]'
      >
        <button
          className={
            'grow cursor-pointer border-b-2 py-[15px] md:pb-[20px] ' +
            cn(followTap === 'follower' && 'text-mainBlack !cursor-default')
          }
          onClick={() => setFollowTap('follower')}
        >
          {followData.follower.total_count} 팔로워
        </button>
        <button
          className={
            'grow cursor-pointer border-b-2 py-[15px] md:pb-[20px] ' +
            cn(followTap === 'following' && 'text-mainBlack !cursor-default')
          }
          onClick={() => setFollowTap('following')}
        >
          {followData.following.total_count} 팔로잉
        </button>
      </div>
      <FollowButton followUsers={followData} tap={followTap} followingIds={followingIds} />
    </div>
  );
}
