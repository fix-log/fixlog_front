import { dummyChats } from '@/entities/fixletter/dummyChats';
import Image from 'next/image';

export default function CahtSidebar() {
  return (
    <div className='slim-scrollbar border-gray5 flex h-[100vh] w-[450px] flex-col gap-3 border-r'>
      <ul className='flex h-full flex-col gap-3 overflow-y-auto px-4 py-6'>
        {dummyChats.map((chat) => (
          <li
            key={chat.id}
            className={`relative flex min-h-[90px] cursor-pointer items-center gap-4 rounded p-3 ${chat.selected ? 'border-mainRed shadow-mainRed50 border bg-white shadow-sm' : 'border-gray5 border bg-white'}`}
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
                <div className='text-mainBlack truncate pb-[2px] text-[16px] font-extrabold'>
                  {chat.name}
                </div>
                <div className='text-gray3 font-regular truncate text-[14px]'>{chat.preview}</div>
              </div>
            </div>
            <span className='text-gray3 absolute top-3 right-3 text-end text-[12px]'>
              {chat.time}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
