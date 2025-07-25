'use client';
import { Search } from 'lucide-react';

export default function SearchInput() {
  return (
    <div className='relative flex w-[1135px] justify-center'>
      <Search
        className='text-mainBlack text-bold absolute top-[30px] left-[25px]'
        strokeWidth={3}
        size={20}
      />
      <input
        className='bg-gray6 mr-[25px] h-[70px] w-[100%] rounded-[5px] px-4 py-2 pl-15 placeholder:text-[18px]'
        placeholder='검색어를 입력해주세요'
      />
      <button className='bg-mainBlack text-mainWhite h-[70px] w-[100px] rounded-[5px]'>검색</button>
    </div>
  );
}
