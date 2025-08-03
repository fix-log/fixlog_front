import Image from 'next/image';

export default function SearchEmpty() {
  return (
    <div className='mb-[300px] flex flex-1 flex-col items-center justify-center gap-2 text-gray-400'>
      <Image
        src='/x_emput.png'
        alt='x_emput'
        width={70}
        height={70}
        className='mt-[150px] mb-[25px]'
      />
      <div className='text-gray4 text-[24px] font-bold'>검색하신 내용이 없습니다!</div>
    </div>
  );
}
