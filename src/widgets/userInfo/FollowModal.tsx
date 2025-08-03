'use clinet';

import { followData } from '@/features/user/api/Types';
import { colorChangeAnimation } from '@/shared/ui/Animation';
import { X } from 'lucide-react';
import { Dispatch, SetStateAction, useState } from 'react';
import FollowButton from './FollowButton';
import { cn } from '@/shared/lib/util';

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
  return (
    <div className='h-[800px] w-[600px]'>
      <X
        className={
          'text-gray3 hover:text-mainRed mt-[11px] mr-[14px] ml-auto cursor-pointer' +
          colorChangeAnimation
        }
        onClick={() => setIsOpen(false)}
      />
      <div className='text-gray4 flex justify-between font-bold'>
        <button
          className={
            'grow cursor-pointer border-b-2 pb-[20px] ' +
            cn(followTap === 'follower' && 'text-mainBlack !cursor-default')
          }
          onClick={() => setFollowTap('follower')}
        >
          {followData.follower.total_count} 팔로워
        </button>
        <button
          className={
            'grow cursor-pointer border-b-2 pb-[20px] ' +
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
