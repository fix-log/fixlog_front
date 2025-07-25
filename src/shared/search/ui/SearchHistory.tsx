'use client';

import HistoryItem from './HistoryItem';

const hasSearch = true;

export default function SearchHistory() {
  return (
    <>
      {hasSearch ? (
        <div className='border-gray5 mt-[20px] w-full rounded-[5px] border p-[20px]'>
          <div className='mb-[10px] flex justify-between'>
            <p className='text-[20px] font-extrabold'> 최근 검색</p>
            <div className='flex'>
              <button className='text-gray4'>전체 삭제</button>
              <p className='text-gray4 mr-[10px] ml-[10px] text-[24px]'>|</p>
              <button className='text-gray4'>자동 완성 끄기</button>
            </div>
          </div>
          <div>
            <HistoryItem />
          </div>
        </div>
      ) : (
        <div className='mb0[10px] mt-[10px]'></div>
      )}
    </>
  );
}
