'use client';

import { cn } from '@/shared/lib/util';
import Link from 'next/link';
import { forwardRef } from 'react';

interface EditDeleteDropdownProps {
  position: string;
  href: string;
  handleDelete: () => void; // TODO: 삭제 API에 맞게 타입 수정하기
}

export default forwardRef<HTMLDivElement, EditDeleteDropdownProps>(function EditDeleteDropdown(
  { position, href, handleDelete },
  ref,
) {
  return (
    <div
      ref={ref}
      className={cn(
        'border-gray5 absolute z-10 flex min-w-31 flex-col rounded-[5px] border bg-white',
        position,
      )}
    >
      <Link
        href={href}
        className='text-gray2 border-gray5 hover:bg-gray6 border-b px-8 py-5 transition-all'
      >
        수정하기
      </Link>
      <button
        onClick={handleDelete}
        className='text-mainRed hover:bg-gray6 cursor-pointer px-8 py-5 transition-all duration-200'
      >
        삭제하기
      </button>
    </div>
  );
});
