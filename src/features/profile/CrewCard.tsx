'use client';

import { crewType } from "./dummy";


interface CrewCardProps {
  data: crewType;
}

export default function CrewCard({ data }: CrewCardProps) {
  return (
    <div className='bg-mainWhite border-gray5 flex h-[380px] w-[400px] flex-col gap-[13px] rounded-[5px] border-2 p-[32px_47px]'>
      <div className='text-gray3 flex'>
        <p className='text-pointDarkGreen font-extrabold'>
          {data.모집현황 ? '모집중' : '모집완료'}
        </p>
        <p>ㅣ</p>
        <p>{data.모집날짜}</p>
      </div>
      <h1 className='text-[24px] leading-[130%] font-extrabold'>{data.제목}</h1>
      <ul className='flex gap-3 font-medium'>
        {data.태그.map((item) => (
          <li key={item} className='bg-gray6 text-gray3 rounded-[5px] p-[4px_15px]'>{item}</li>
        ))}
      </ul>
      <span className='border-mainRed bg-mainWhite text-mainRed my-[5px] mr-[15px] self-start rounded-[20px] border px-[10px] py-[5px] font-bold'>
        {data.포지션}
      </span>
      <div className='mt-auto flex h-[50px] justify-between gap-4 font-extrabold text-white'>
        <button className='bg-mainBlack grow cursor-pointer rounded-[5px]'>모집글 수정</button>
        <button className='bg-mainRed grow cursor-pointer rounded-[5px]'>지원자 확인</button>
      </div>
    </div>
  );
}
