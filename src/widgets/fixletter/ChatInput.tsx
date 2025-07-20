'use client';

import { useState } from 'react';
import { Camera } from 'lucide-react';

export default function ChatInput() {
  const [value, setValue] = useState('');

  return (
    <form
      className='border-gray5 flex items-center gap-2 border-t px-6 py-3'
      onSubmit={(e) => {
        e.preventDefault();
        // 여기에 실제 메시지 전송 로직이 들어가요!
        setValue('');
      }}
    >
      <button type='button' className='p-2 text-gray-400'>
        <Camera size={22} />
      </button>
      <input
        className='bg-gray6 focus:border-mainRed focus:ring-mainRed focus:ring-0.5 flex-1 rounded-lg border border-transparent px-4 py-2 text-sm outline-none'
        placeholder='메시지를 입력하세요'
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        type='submit'
        className='ml-2 flex h-10 w-10 items-center justify-center rounded-full bg-red-500 text-xl text-white hover:bg-red-600'
      >
        ↑
      </button>
    </form>
  );
}
