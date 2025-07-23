import React from 'react';
import Image from 'next/image';
import { NotiCardData } from '@/entities/notification/notiDummyData';
import { useRouter } from 'next/navigation';

interface NotiCardProps {
  data: NotiCardData;
}

export default function NotiCard({ data }: NotiCardProps) {
  console.log(data);

  const router = useRouter();

  if (!data) return null;

  const HandleMove = () => {
    router.push(data.linkUrl);
  };

  return (
    <div className='border-gray5 mb-[20px] flex h-[140px] flex-col rounded-[5px] border px-[5px]'>
      <div className='border-gray5 flex h-[45px] items-center border-b px-[10px]'>
        <Image
          src={data.icon}
          alt={data.type}
          width={23}
          height={23}
          className='mr-2 ml-2'
          priority
        />
        <div className='text-mainBlack text-[16px] font-extrabold'>{data.type}</div>
      </div>
      <div className='text-mainBlack mt-[20px] pl-[20px] text-[18px]'>{data.title}</div>
      <button
        onClick={HandleMove}
        className='text-pointDarkGreen mt-[5px] block pl-[20px] text-left font-bold'
      >
        {data.description}
      </button>
    </div>
  );
}
