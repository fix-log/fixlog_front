'use client';

import { useState } from 'react';
import { Star } from 'lucide-react';
import clsx from 'clsx';

interface Props {
  projectId: number;
  initialBookmarked?: boolean;
}

export default function BookmarkButton({ projectId, initialBookmarked = false }: Props) {
  const [bookmarked, setBookmarked] = useState(initialBookmarked);

  const handleClick = () => {
    // UI만 바뀌는 임시 토글
    setBookmarked((prev) => !prev);

    // 여기에 API 연동 로직 추가 예정
  };

  return (
    <button
      onClick={handleClick}
      className={clsx(
        'border-gray4 flex items-center justify-center rounded-[5px] border',
        'h-[60px] w-[68px] flex-shrink-0 transition',
      )}
      aria-label='북마크'
    >
      <Star
        strokeWidth={1.2}
        className={clsx(
          'h-[40px] w-[40px] transition',
          bookmarked ? 'fill-pointYellow text-pointYellow' : 'text-pointYellow',
        )}
      />
    </button>
  );
}
