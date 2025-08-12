'use client';

import { userInfoStore } from '@/entities/profile/UserInfoStore';
import { colorChangeAnimation } from '@/shared/ui/Animation';
import Link from 'next/link';

interface FollowButtonProps {
  followingIds: number[];
}

export default function FollowButton({ followingIds }: FollowButtonProps) {
  const userid = userInfoStore((s) => s.userInfo).viewUserId;
  const isFollowing = followingIds.includes(userid);
  const followButton = {
    text: isFollowing ? '팔로잉' : '팔로우',
    style: isFollowing ? 'border' : 'bg-mainBlack text-white hover:bg-black ',
  };

  return (
    <>
      <button
        className={
          'grow-3 cursor-pointer rounded-[5px] py-3 leading-[1.8] ' +
          colorChangeAnimation +
          followButton.style
        }
      >
        {followButton.text}
      </button>
      <Link
        href={'/fixletter'}
        className={'border-mainBlack grow rounded-[5px] border py-3 leading-[1.8]'}
      >
        픽레터 보내기
      </Link>
    </>
  );
}
