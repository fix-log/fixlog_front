'use client';

import Image from 'next/image';
import { ChevronRight, UserPlus } from 'lucide-react';
import Link from 'next/link';

interface ProfileProps {
  isMe: boolean;
  viewedUserId: number;
}

export default function Profile({ isMe, viewedUserId }: ProfileProps) {
  console.log(isMe);
  // useEffect(() => {
  //   const api = async () => {
  //     // 임시공간
  //     // API 유저정보 조회 (userId 대조)
  //     // API 팔로워/팔로잉 조회
  //   };
  // }, []);

  // 더미데이터
  const userInfoData = {
    img: '/icon_profile.png',
    level: 1,
    followers: 5,
    nickname: '이운',
    career: '신입',
    email: 'test@fixlog.com',
  };

  return (
    <div className='flex items-center gap-7'>
      <Image
        src='/icon_profile.png'
        alt='프로필'
        width={125}
        height={125}
        className='h-auto w-[125px] cursor-pointer'
      />
      <div className='text-body-m flex flex-col !leading-[1.5]'>
        <div className='flex gap-3 font-bold'>
          <h1 className='text-h3'>{userInfoData.nickname}</h1>

          <p className='border-mainRed text-mainRed rounded-full border-2 px-[10px] py-[4px]'>
            LV. {userInfoData.level}
          </p>

          <p className='border-pointDarkGreen text-pointDarkGreen rounded-full border-2 px-[10px] py-[4px]'>
            경력 {userInfoData.career}
          </p>
        </div>
        <p className='text-body-l mt-1 inline-block'>{userInfoData.email}</p>

        <div className='text-gray3 mt-3 flex items-center gap-1'>
          <UserPlus className='h-[15px] w-[15px]' />
          <p className='text-body-m cursor-pointer !leading-[1.5] hover:underline'>
            팔로워 {userInfoData.followers}명
          </p>
        </div>
      </div>

      {/* 유저리뷰페이지 이동버튼 */}
      <Link href={`${viewedUserId}/review`} className='ml-auto'>
        <ChevronRight className='text-gray3 h-[70px] w-[60px] cursor-pointer' />
      </Link>
    </div>
  );
}
