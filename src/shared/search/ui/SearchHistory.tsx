'use client';

import { dummySearchHistory } from '@/entities/search/dummySearchHistoy';
import HistoryItem from './HistoryItem';
import { useState } from 'react';

const hasSearch = true;

export default function SearchHistory() {
  const [tags, setTags] = useState(dummySearchHistory);
  const [autoCompleteOn, setAutoCompleteOn] = useState(true);

  const HendlrDeleteTag = (id: number) => {
    setTags((prev) => prev.filter((item) => item.id !== id));
  };

  const HendlrDeleteTagAll = () => setTags([]);

  const handleToggleAutoComplete = () => setAutoCompleteOn(false);

  return (
    <>
      {hasSearch ? (
        <div className='border-gray5 mt-[20px] w-full rounded-[5px] border p-[20px]'>
          <div className='mb-[10px] flex justify-between'>
            <p className='text-[20px] font-extrabold'> 최근 검색</p>
            <div className='flex'>
              <button className='text-gray4 text-[16px]' onClick={HendlrDeleteTagAll}>
                전체 삭제
              </button>
              <p className='text-gray4 mr-[10px] ml-[10px] text-[22px]'>|</p>
              <button className='text-gray4 text-[16px]' onClick={handleToggleAutoComplete}>
                자동 완성 끄기
              </button>
            </div>
          </div>
          {autoCompleteOn ? (
            tags.length === 0 ? (
              <div className='py-10 text-center text-gray-300'>최근 검색어가 없습니다</div>
            ) : (
              <HistoryItem tags={tags} onRemove={HendlrDeleteTag} />
            )
          ) : (
            <div className='py-10 text-center text-gray-300'>
              최근 검색어 저장 기능이 꺼져있습니다
            </div>
          )}
        </div>
      ) : (
        <div className='mb0[10px] mt-[10px]'></div>
      )}
    </>
  );
}
