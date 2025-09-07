'use clinet';

import { userInfoStore } from '@/entities/profile/UserInfoStore';
import { followData } from '@/features/user/api/Types';
import getNumericStyle from '@/shared/lib/getNumericStyle';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface FollowButtonProps {
  followUsers: {
    follower: followData;
    following: followData;
  };
  tap: 'follower' | 'following';
  followingIds: number[];
}

export default function FollowButton({ followUsers, tap, followingIds }: FollowButtonProps) {
  const router = useRouter();
  const isMe = userInfoStore((s) => s.userInfo.isMe);
  const baseStyle =
    'md:h-[30px] h-[22px] w-[57px] md:w-[80px] rounded-[5px] text-[12px] md:text-[14px] font-medium md:font-extrabold';

  const viewMyButtons = {
    follower: {
      name: '맞팔로우',
      options: { className: baseStyle + ' bg-gray5 cursor-pointer' },
    },
    following: {
      name: '픽레터',
      options: {
        className: baseStyle + '  border border-mainBlack cursor-pointer',
        onClick: () => router.push('/'),
      },
    },
  };
  const viewUserButtons = {
    follower: {
      name: '팔로우',
      options: { className: baseStyle + ' bg-mainRed text-mainWhite cursor-pointer' },
    },
    following: {
      name: '팔로잉',
      options: {
        className: baseStyle + '  border border-mainBlack cursor-pointer',
      },
    },
  };

  const button = isMe ? viewMyButtons : viewUserButtons;

  const containerHeight = getNumericStyle('#follow-container', 'height') as number;
  const tapHeight = getNumericStyle('#follow-tap', 'height') as number;
  const closeHeight = getNumericStyle('#close-follow-modal', 'height') as number;
  const contentHeght = Math.floor(containerHeight - (tapHeight + closeHeight));
  console.log(contentHeght);

  interface following {
    user_id: number;
    username: string;
  }

  return (
    <div
      style={{ '--h': `${contentHeght}px` } as React.CSSProperties}
      className={`md:h-[var(--h)] h-[80vh] overflow-y-scroll`}
    >
      {followUsers[tap].following.map((item: following) => {
        const ss = followingIds.includes(item.user_id) ? 'following' : 'follower';
        return (
          <div
            className='border-gray5 flex cursor-default items-center gap-[18px] border px-[24px] py-[11px] md:py-[20px] md:pr-[44px] md:pl-[37px]'
            key={item.user_id}
          >
            <Image
              src={'/icon_profile.png'}
              alt='유저 프로필'
              width={50}
              height={50}
              className='h-[40px] w-[40px] md:h-[50px] md:w-[50px]'
            />
            <div className='grow'>
              <p className='text-[14px] font-extrabold md:text-[18px]'>{item.username}</p>
              <p className='text-gray4 text-[10px] font-medium md:text-[12px]'>text@fixlog.com</p>
            </div>
            <button {...button[ss].options}>{button[ss].name}</button>
          </div>
        );
      })}
    </div>
  );
}
