import { dummyChats } from '@/entities/fixletter/dummyChats';
import Image from 'next/image';

export default function CahtSidebar() {
  return (
    <div className='flex w-[430px] flex-col gap-3 border-r bg-gray-50 px-4 py-6'>
      <ul>
        {dummyChats.map((chat) => (
          <li
            key={chat.id}
            className={`flex h-[100px] cursor-pointer items-center gap-3 rounded p-3 ${chat.selected ? 'border border-red-300 bg-white' : 'bg-gray-100'}`}
          >
            <Image
              src={chat.avatar}
              alt={chat.name}
              width={40}
              height={40}
              className='h-10 w-10 rounded-full object-cover'
            />
            <div className='flex w-[380px]'>
              <div className='w-[280px]flex-1 mr-[30px]'>
                <div className='text-mainBlack truncate text-[20px] font-bold'>{chat.name}</div>
                <div className='text-gray3 font-regular truncate text-[14px]'>{chat.preview}</div>
              </div>
              <span className='text-gray3 text-end text-[14px]'>{chat.time}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
