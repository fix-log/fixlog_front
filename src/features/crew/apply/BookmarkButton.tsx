'use client';

import { useState } from 'react';
import { StarIcon as StarOutline } from '@heroicons/react/24/outline';
import { StarIcon as StarSolid } from '@heroicons/react/24/solid';
import clsx from 'clsx';

interface Props {
  projectId: number;
  initialBookmarked?: boolean;
}

export default function BookmarkButton({ projectId, initialBookmarked = false }: Props) {
  const [bookmarked, setBookmarked] = useState(initialBookmarked);

  // TODO: 선언 후 사용하지 않아서, 빌드 에러 때문에 일단 콘솔에 한번 찍어 놓을게요! (기태)
  console.log(projectId);

  const handleClick = () => {
    // UI만 바뀌는 임시 토글
    setBookmarked((prev) => !prev);

    // 여기에 API 연동 로직 추가 예정
  };

  return (
    <button
      onClick={handleClick}
      className={clsx(
        'flex items-center justify-center rounded-[5px] border transition',
        'h-[60px] w-[60px] flex-shrink-0',
        'border-gray4',
      )}
      aria-label='북마크'
    >
      {bookmarked ? (
        <StarSolid className='text-pointYellow h-[40px] w-[40px]' strokeWidth={1.2} />
      ) : (
        <StarOutline className='text-pointYellow h-[40px] w-[40px]' strokeWidth={1.2} />
      )}
    </button>
  );
}
