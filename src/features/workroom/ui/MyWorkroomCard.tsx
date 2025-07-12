'use client';

import Link from 'next/link';
import MyWorkroomCardOptionButton from './MyWorkroomCardOptionButton';
import { UsersRound } from 'lucide-react';

// 워크룸 임시 타입
interface Workroom {
  id: string;
  name: string;
  description: string;
  period: string;
  status: string;
  member: number;
}

interface MyWorkroomCardProps {
  workroom: Workroom;
}

export default function MyWorkroomCard({ workroom }: MyWorkroomCardProps) {
  return (
    <div className='relative w-full transition-all duration-200 hover:scale-102'>
      <Link
        href={`/workroom/${workroom.id}/info`}
        className='absolute inset-0 z-0'
        aria-label={`${workroom.name} 워크룸 상세 보기 (내 워크룸)`}
      />

      <div className='border-gray5 md:border-mainRed/40 flex w-80 flex-col items-center justify-center gap-4 rounded-[5px] border bg-white p-[22px] shadow-[0_3px_3px_0_rgba(0,0,0,0.0.05)] md:h-87 md:w-144 md:px-[45px] md:py-[30px] md:shadow-[0_0_13.5px_0_rgba(255,68,39,0.2)]'>
        <div className='mb-12 flex w-full items-center justify-between md:mb-20'>
          <span className='text-pointDarkGreen border-pointDarkGreen rounded-full border-1 px-1.5 py-0.5 text-[12px] md:border-2 md:px-2 md:text-[14px]'>
            {workroom.status}
          </span>
          {/* TODO: 더보기 버튼 (클라이언트 컴포넌트로?) 이벤트 버블링 방지하기 */}
          <MyWorkroomCardOptionButton workroomId={workroom.id} />
        </div>

        <div className='flex w-full flex-col justify-center'>
          <h3 className='mb-2 text-[22px] font-extrabold md:text-[32px]'>{workroom.name}</h3>
          <p className='text-gray3 text-[14px] md:text-[18px]'>{workroom.description}</p>
          <div className='bg-gray5 my-4 h-[1px] w-full md:my-6' />
          <div className='flex w-full items-center justify-between'>
            <span className='text-gray3 text-[12px] md:text-[18px]'>{workroom.period}</span>
            <span className='text-gray3 flex items-center gap-1 text-[12px] md:gap-2 md:text-[18px]'>
              <UsersRound className='size-4 md:size-5' />
              {workroom.member}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
