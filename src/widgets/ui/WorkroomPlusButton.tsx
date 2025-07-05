'use client';

import Modal from '@/shared/ui/Modal';
import { FilePlus, List } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function WorkroomPlusButton() {
  const [isModalOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isModalOpen)}
        className='bg-mainRed fixed right-35 bottom-35 z-100 flex h-20 w-20 items-center justify-center rounded-full hover:cursor-pointer'
      >
        <span
          className={`${isModalOpen && 'rotate-45'} text-5xl text-white transition-all duration-200`}
        >
          +
        </span>
      </button>

      {isModalOpen && (
        <>
          <Modal setIsOpen={setIsOpen} className='inset-auto right-37 bottom-63 px-8 py-3'>
            <Link href='/workroom/mine' className='flex items-center justify-end gap-4 py-7'>
              <div className='flex flex-col items-end justify-between pl-3'>
                <span className='text-[22px] font-extrabold'>워크룸 리스트</span>
                <span className='text-gray3 text-[14px] font-semibold'>
                  내가 만든 워크룸 리스트 보기
                </span>
              </div>
              <List className='text-mainRed size-9' />
            </Link>

            <div className='border-gray5 bg-gray5 h-[1px] w-full px-5' />

            <Link href='/workroom/create' className='flex items-center justify-end gap-4 py-7'>
              <div className='flex flex-col items-end justify-between'>
                <span className='text-[22px] font-extrabold'>나의 워크룸 생성</span>
                <span className='text-gray3 text-[14px] font-semibold'>워크룸 만들기</span>
              </div>
              <FilePlus className='text-mainRed size-9' />
            </Link>
          </Modal>
          <div className='fixed right-40.5 bottom-59 z-100 border-t-[16px] border-r-[16px] border-l-[16px] border-t-white border-r-transparent border-l-transparent' />
        </>
      )}
    </>
  );
}

// TODO: 반응형으로 고정 위치 조정
