'use client';

import Image from 'next/image';
import { useEffect } from 'react';

export default function Profile() {
  useEffect(() => {
    const api = async () => {
      // 임시공간
      // API 유저정보 조회 (userId 대조)
      // API 팔로워/팔로잉 조회
    };
  }, []);

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
    <div className='flex w-full items-center'>
      <Image
        src='/icon_profile.png'
        alt='프로필'
        width={125}
        height={125}
        className='h-auto w-[125px]'
      />
      <div className='flex flex-col'>
        <div className='flex font-bold'>
          <h1>{userInfoData.nickname}</h1>
          <p className='border-mainRed text-mainRed rounded-full border-2 px-[10px] py-[4px]'>
            LV. {userInfoData.level}
          </p>
          <p className='border-pointDarkGreen text-pointDarkGreen rounded-full border-2 px-[10px] py-[4px]'>
            경력 {userInfoData.career}
          </p>
        </div>
        <p className='inline-block'>{userInfoData.email}</p>
        <div className='text-gray3 flex items-center'>
          <svg className='h-[15px] w-[15px]' />
          <p>팔로워 {userInfoData.followers}명</p>
        </div>
      </div>
    </div>
  );
}
