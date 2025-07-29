'use clinet';

import { userInfoStore } from '@/entities/userInfo/UserInfoStore';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface FollowButtonProps {
  followUsers: any;
  tap: 'follower' | 'following';
  followingIds: number[];
}

export default function FollowButton({ followUsers, tap, followingIds }: FollowButtonProps) {
  const router = useRouter();
  const isMe = userInfoStore((s) => s.userInfo.isMe);
  const baseStyle = 'h-[30px] w-[80px] rounded-[5px] text-[14px] font-bold';

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

  interface following {
    user_id: number;
    username: string;
  }
  return followUsers[tap].following.map((item: following) => {
    const ss = followingIds.includes(item.user_id) ? 'following' : 'follower';

    return (
      <div
        className='border-gray5 flex cursor-default items-center gap-[18px] border py-[20px] pr-[44px] pl-[37px]'
        key={item.user_id}
      >
        <Image src={'/icon_profile.png'} alt='유저 프로필' width={50} height={50} />
        <div className='grow'>
          <p className='text-[18px] font-bold'>{item.username}</p>
          <p className='text-gray4 text-[12px]'>text@fixlog.com</p>
        </div>
        <button {...button[ss].options}>{button[ss].name}</button>
      </div>
    );
  });
}
