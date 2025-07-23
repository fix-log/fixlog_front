'use client';

import Image from 'next/image';

interface Props {
  onClick: () => void;
}

export default function FloatingWriteButton({ onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-6 right-6 z-50 w-14 h-14"
      aria-label="새 글 작성"
    >
      <Image
        src="/write-button.svg"
        alt="글쓰기 버튼"
        width={56}
        height={56}
        className="w-full h-full"
        priority
      />
    </button>
  );
}
