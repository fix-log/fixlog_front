'use client';

import { useState } from 'react';
import { Ellipsis } from 'lucide-react';
import Link from 'next/link';

interface MyWorkroomCardOptionButtonProps {
  workroomId: string;
}

export default function MyWorkroomCardOptionButton({
  workroomId,
}: MyWorkroomCardOptionButtonProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  // TODO: 삭제 API 연결하기 (워크룸id를 파라미터로 전달해서), (useCallback으로 감싸기)
  const handleDelete = () => {
    console.log(`워크룸 id: ${workroomId} - 삭제`);
  };

  return (
    <div className='relative'>
      <button
        onClick={() => {
          setIsDropdownOpen((prev) => !prev);
        }}
        className='hover:cursor-pointer'
      >
        <Ellipsis className='text-gray5 hover:text-gray4 size-7 transition-all duration-200' />
      </button>

      {isDropdownOpen && (
        <div className='border-gray5 absolute top-8 -right-0.5 flex min-w-31 flex-col rounded-[5px] border bg-white'>
          <Link
            href={`/workroom/${workroomId}/edit`}
            className='text-gray2 border-gray5 hover:bg-gray6 border-b px-8 py-5 transition-all'
          >
            수정하기
          </Link>
          <button
            onClick={handleDelete}
            className='text-mainRed hover:bg-gray6 px-8 py-5 transition-all duration-200 hover:cursor-pointer'
          >
            삭제하기
          </button>
        </div>
      )}
    </div>
  );
}
