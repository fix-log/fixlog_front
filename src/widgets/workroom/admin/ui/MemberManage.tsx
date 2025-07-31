'use client';

import { useState } from 'react';
import MemberList from './MemberList';
import MemberInviteModal from './MemberInviteModal';

export default function MemberManage() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className='border-gray4 flex w-full flex-col rounded-[5px] border px-[40px] py-[25px]'>
      <div className='flex items-center justify-between'>
        <h3 className='text-[18px] font-bold'>멤버</h3>
        <button
          onClick={() => {
            setIsOpen(true);
          }}
          className='bg-mainBlack text-mainWhite h-[40px] w-[100px] rounded-[5px] text-[14px]'
        >
          추가하기
        </button>
      </div>
      <MemberList />
      {isOpen && <MemberInviteModal onClose={() => setIsOpen(false)} />}
    </div>
  );
}
