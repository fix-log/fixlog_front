'use client';

import { crewType } from './dummy';

interface CrewCardProps {
  data: crewType;
}

export default function CrewCard({ data }: CrewCardProps) {
  return (
    <div className='bg-mainWhite border-gray5 flex w-[253px] flex-col gap-[8px] rounded-[5px] border-2 p-[26px_20px] text-[10px] md:h-[380px] md:w-[400px] md:gap-[13px] md:p-[32px_47px] md:text-[18px]'>
      {/* 상단 모집현황 & 모집날짜 */}
      <div className='text-gray3 flex text-[10px] md:text-[14px] mb-3 md:mb-0'>
        <p className='text-pointDarkGreen font-extrabold'>
          {data.모집현황 ? '모집중' : '모집완료'}
        </p>
        <p>ㅣ</p>
        <p>{data.모집날짜}</p>
      </div>

      {/* 내용 */}
      <h1 className='text-[18px] leading-[130%] font-extrabold md:text-[24px]'>{data.제목}</h1>
      <ul className='flex gap-3 font-medium'>
        {data.태그.map((item) => (
          <li key={item} className='bg-gray6 text-gray3 rounded-[5px] p-[2px_5px] md:p-[4px_15px]'>
            {item}
          </li>
        ))}
      </ul>
      <span className='border-mainRed bg-mainWhite text-mainRed my-[5px] mr-[15px] self-start rounded-[20px] border p-[4px_8px] font-bold md:p-[5px_10px]'>
        {data.포지션}
      </span>

      {/* 버튼들 */}
      <div className='mt-auto flex justify-between gap-4 font-bold text-white md:font-extrabold'>
        <button className='bg-mainBlack mt-2 h-[26px] grow cursor-pointer rounded-[5px] md:mt-3.5 md:h-[50px]'>
          모집글 수정
        </button>
        <button className='bg-mainRed mt-2 h-[26px] grow cursor-pointer rounded-[5px] md:mt-3.5 md:h-[50px]'>
          지원자 확인
        </button>
      </div>
    </div>
  );
}
