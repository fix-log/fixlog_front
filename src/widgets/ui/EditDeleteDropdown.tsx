'use client';

import { useEffect, useRef } from 'react';
import { cn } from '@/shared/lib/util';
import Link from 'next/link';

interface EditDeleteDropdownProps {
  position: string;
  href: string;
  handleDelete: () => void; // TODO: 삭제 API에 맞게 타입 수정하기
  isOpen: boolean;
  onClose: () => void;
}

export default function EditDeleteDropdown({
  position,
  href,
  handleDelete,
  isOpen,
  onClose,
}: EditDeleteDropdownProps) {
  const ref = useRef<HTMLDivElement>(null);

  // 외부 클릭 시 닫히는 효과
  useEffect(() => {
    if (!isOpen) return;

    function handleClick(event: MouseEvent | TouchEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onClose();
      }
    }

    document.addEventListener('mousedown', handleClick);
    document.addEventListener('touchstart', handleClick);

    return () => {
      document.removeEventListener('mousedown', handleClick);
      document.removeEventListener('touchstart', handleClick);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

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
}
