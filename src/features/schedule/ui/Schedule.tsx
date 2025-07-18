'use client';

import { useState } from 'react';
import { EllipsisVertical } from 'lucide-react';
import EditDeleteDropdown from '@/widgets/ui/EditDeleteDropdown';

export default function Schedule() {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  const handleDelete = () => {
    console.log('일정 삭제');
  };

  return (
    <li className='relative flex h-[90px] items-center justify-between rounded-l-[10px] bg-violet-50'>
      <div className='h-full w-[15px] rounded-full bg-violet-200' />
      <div className='flex grow flex-col justify-center gap-2 px-[18px]'>
        <span className='text-h6 font-extrabold'>일정 1</span>
        <span className='text-h6 text-gray2 font-semibold'>10:00 ~ 12:00</span>
      </div>
      {/* 서버 컴포넌트로 바꾸고 나면, 컴포넌트 분리 (클라이언트 컴포넌트로) */}
      <button
        onClick={() => {
          setIsDropdownOpen((prev) => !prev);
        }}
        className='mx-1 p-2 transition-all duration-200 hover:scale-120 hover:cursor-pointer'
      >
        <EllipsisVertical size={26} />
      </button>

      {isDropdownOpen && (
        <EditDeleteDropdown
          position='top-6 right-12'
          href={`/workroom/워크룸id/schedule/날짜/일정id/edit`}
          handleDelete={handleDelete}
        />
      )}
    </li>
  );
}
