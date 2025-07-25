'use client';

import { dummySearchHistory } from '@/entities/search/dummySearchHistoy';
import { X } from 'lucide-react';
import { useState } from 'react';

export default function HistoryItem() {
  const [tags, setTags] = useState(dummySearchHistory);

  const HendlrDeleteTag = (id: number) => {
    setTags((prev) => prev.filter((item) => item.id !== id));
  };

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
              HendlrDeleteTag(item.id);
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
