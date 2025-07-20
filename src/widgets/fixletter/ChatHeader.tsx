'use client';

import { dummyChats } from '@/entities/fixletter/dummyChats';
import Image from 'next/image';

export default function ChatHeader() {
  const chat = dummyChats.find((c) => c.selected === true);

  if (!chat) {
    return <p> 로딩중입니다</p>;
  }
  return (
    <header className='border-gray5 relative flex items-center gap-3 border-b px-6 py-4'>
      <Image
        src={chat.avatar}
        alt={chat.name}
        width={40}
        height={40}
        className='mx-auto h-12 w-12 rounded-full object-cover'
      />
      {/* 이름, 시간 */}
      <div className='flex flex-1 flex-col justify-start'>
        <span className='text-[20px] font-extrabold'>다고운</span>
        <span className='text-gray3 text-[14px]'>2시간 전</span>
      </div>
    </header>
  );
}
