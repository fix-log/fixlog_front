'use client';

import { ChevronRight, UserPlus } from 'lucide-react';
import Link from 'next/link';
import { colorChangeAnimation } from '@/shared/ui/Animation';
import { userInfoStore } from '@/entities/profile/UserInfoStore';
import { Dispatch, SetStateAction } from 'react';
import Image from 'next/image';
import { useMediaQuery } from '@/shared/hooks/useMediaQuery';

interface ProfileProps {
  totalFollower: number;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}

export default function Profile({ totalFollower, setIsModalOpen }: ProfileProps) {
  const userInfoData = userInfoStore((s) => s.userInfo);
  const isDesktop = useMediaQuery() === 'desktop';

  return (
    <>
      <div className='flex items-center gap-7'>
        <Image
          src='/icon_profile.png'
          alt='유저 프로필'
          width={125}
          height={125}
          className={'h-auto w-[59px] lg:w-[125px]'}
        />

        <div className='text-body-m flex flex-col !leading-[1.5]'>
          <div className='flex items-center gap-3 text-[10px] font-bold lg:text-[14px]'>
            <h1 className='text-[22px] font-extrabold lg:text-[32px]'>{userInfoData.nickname}</h1>

            <p className='border-mainRed text-mainRed rounded-full border-1 lg:border-2 px-[10px] py-[4px]'>
              LV. {userInfoData.level}
            </p>

            <p className='border-pointDarkGreen text-pointDarkGreen rounded-full border-1 lg:border-2 px-[10px] py-[4px]'>
              경력 {userInfoData.career}
            </p>
          </div>
          <p className='mt-1 inline-block text-[12px] font-medium lg:text-[18px]'>
            {userInfoData.email}
          </p>

          {isDesktop && (
            <div className='text-gray3 mt-3 flex items-center gap-1 font-medium lg:text-[16px]'>
              <UserPlus className='h-[15px] w-[15px]' />
              <p
                className='cursor-pointer !leading-[1.5] hover:underline'
                onClick={() => setIsModalOpen(true)}
              >
                팔로워 {totalFollower}명
              </p>
            </div>
          )}
        </div>

        {/* 유저리뷰페이지 이동버튼 */}
        <Link href={`${userInfoData.viewUserId}/review`} className='ml-auto'>
          <ChevronRight
            className={
              'text-gray3 hover:text-gray1 h-[30px] lg:h-[70px] w-[30px] lg:w-[60px] cursor-pointer' + colorChangeAnimation
            }
          />
        </Link>
      </div>
      {isDesktop || (
        <div className='text-gray3 mt-3 flex items-center gap-1 text-[12px] font-medium ml-1 '>
          <UserPlus className='h-[15px] w-[15px]' />
          <p
            className='cursor-pointer !leading-[1.5] hover:underline'
            onClick={() => setIsModalOpen(true)}
          >
            팔로워 {totalFollower}명
          </p>
        </div>
      )}
    </>
  );
}
