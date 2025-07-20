'use client';

import Image from 'next/image';

export default function Footer() {
  return (
    <footer className='bg-gray6 w-full'>
      <div className='mx-auto flex max-w-[1440px] flex-col px-6 py-[95px] md:flex-row md:justify-between md:gap-10'>
        {/* 좌측 */}
        <div className='mb-12 md:mb-0 md:flex-1'>
          <div className='mb-4'>
            <Image src='/fixlog.png' alt='fixlog 로고' width={100} height={40} />
          </div>
          <p className='text-sm leading-relaxed text-zinc-500'>
            경험이 기록되고, 키워드가 성장으로 연결되는 곳<br />
            픽스로그에서 당신의 협업 레벨을 올려보세요
          </p>
        </div>

        {/* 우측 */}
        <div className='flex flex-col items-start space-y-2 text-left text-sm text-zinc-500 md:flex-1 md:items-end md:text-right'>
          <div className='flex flex-wrap gap-6 md:justify-end'>
            <a href='#' className='hover:underline'>
              이용약관
            </a>
            <a href='#' className='hover:underline'>
              개인정보처리방침
            </a>
            <a href='#' className='hover:underline'>
              서비스 소개
            </a>
            <a href='#' className='hover:underline'>
              광고상품 소개
            </a>
          </div>
          <p>Contact: fixlog.team.official@gmail.com</p>
          <p>© 2025 Fixlog. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
