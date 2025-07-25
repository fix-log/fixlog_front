'use client';

import { dummySearchHistory } from '@/entities/search/dummySearchHistoy';
import { X } from 'lucide-react';

export default function HistoryItem({
  tags,
  onRemove,
}: {
  tags: typeof dummySearchHistory;
  onRemove: (id: number) => void;
}) {
  if (!tags.length) return null;

  return (
    <div className='mb-[5px] flex h-[90px] flex-wrap justify-start gap-3 overflow-x-auto px-1'>
      {tags.map((item) => (
        <div
          key={item.id}
          className='bg-gray6 text-gray2 flex items-center gap-2 rounded-[100px] px-[20px] py-[5px]'
        >
          {item.keyword}
          <button
            onClick={() => {
              onRemove(item.id);
            }}
            aria-label='삭제'
          >
            <X size={16} className='text-gray3 cursor-pointer' />
          </button>
        </div>
      ))}
    </div>
  );
}
