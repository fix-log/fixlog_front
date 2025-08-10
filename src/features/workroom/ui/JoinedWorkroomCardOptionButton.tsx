'use client';

import { Ellipsis } from 'lucide-react';
import { useState } from 'react';

interface JoinedWorkroomCardOptionButtonProps {
  workroomId: string;
}

export default function JoinedWorkroomCardOptionButton({
  workroomId,
}: JoinedWorkroomCardOptionButtonProps) {
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
        className='cursor-pointer'
      >
        <Ellipsis className='text-gray5 hover:text-gray4 mx-1 my-1 size-6 transition-all duration-200 max-md:translate-x-2.5 md:mx-2' />
      </button>

      {isDropdownOpen && (
        <button
          onClick={handleDelete}
          className='border-gray5 text-mainRed hover:bg-gray6 absolute top-8 -right-1.5 min-w-31 cursor-pointer rounded-[5px] border bg-white px-8 py-5 transition-all duration-200'
        >
          삭제하기
        </button>
      )}
    </div>
  );
}
