import { dummyChats } from '@/entities/fixletter/dummyChats';
import Image from 'next/image';

export default function CahtSidebar() {
  return (
    <div className='flex w-[320px] flex-col gap-3 border-r bg-gray-50 px-4 py-6'>
      <ul>
        {dummyChats.map((chat) => (
          <li
            key={chat.id}
            className={`flex cursor-pointer items-center gap-3 rounded p-3 ${chat.selected ? 'border border-red-300 bg-white' : 'bg-gray-100'}`}
          >
            <Image
              src={chat.avatar}
              alt={chat.name}
              width={40}
              height={40}
              className='h-10 w-10 rounded-full object-cover'
            />
            <div className='min-w-0 flex-1'>
              <div className='truncate text-base font-bold'>{chat.name}</div>
              <div className='truncate text-xs text-gray-500'>{chat.preview}</div>
            </div>
            <span className='text-xs text-gray-400'>{chat.time}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
