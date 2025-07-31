'use client';

import { ChevronRight, UserPlus } from 'lucide-react';
import Link from 'next/link';
import { colorChangeAnimation } from '@/shared/ui/Animation';
import { userInfoStore } from '@/entities/userInfo/UserInfoStore';
import { Dispatch, SetStateAction } from 'react';
import Image from 'next/image';

interface ProfileProps {
  totalFollower: number;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}

export default function Profile({ totalFollower, setIsModalOpen }: ProfileProps) {
  const userInfoData = userInfoStore((s) => s.userInfo);

  return (
    <div className='flex items-center gap-7'>
      <Image
        src='/icon_profile.png'
        alt='유저 프로필'
        width={125}
        height={125}
        className={'h-auto w-[125px]'}
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
          <p
            className='text-body-m cursor-pointer !leading-[1.5] hover:underline'
            onClick={() => setIsModalOpen(true)}
          >
            팔로워 {totalFollower}명
          </p>
        </div>
      </div>

      {/* 유저리뷰페이지 이동버튼 */}
      <Link href={`${userInfoData.viewUserId}/review`} className='ml-auto'>
        <ChevronRight
          className={
            'text-gray3 hover:text-gray1 h-[70px] w-[60px] cursor-pointer' + colorChangeAnimation
          }
        />
      </Link>
    </div>
  );
}
