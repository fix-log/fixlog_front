'use client';

import { useState } from 'react';
import { Ellipsis } from 'lucide-react';
import Link from 'next/link';
import EditDeleteDropdown from '@/widgets/ui/EditDeleteDropdown';

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
        <EditDeleteDropdown
          position='top-8 -right-0.5'
          href={`/workroom/${workroomId}/edit`}
          handleDelete={handleDelete}
        />
      )}
    </div>
  );
}
