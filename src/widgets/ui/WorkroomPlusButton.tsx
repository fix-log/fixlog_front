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
        onClick={() => setIsOpen((prev) => !prev)}
        className='bg-mainRed hover:bg-mainRed/85 fixed right-5 bottom-25 z-100 flex h-[55px] w-[55px] cursor-pointer items-center justify-center rounded-full transition-all duration-200 md:right-35 md:bottom-35 md:h-20 md:w-20'
      >
        <span
          className={`${isModalOpen && 'rotate-45'} text-4xl text-white transition-all duration-200 md:text-5xl`}
        >
          +
        </span>
      </button>

      {isModalOpen && (
        <>
          <Modal
            setIsOpen={setIsOpen}
            className='inset-auto right-5 bottom-45 px-4 py-3 md:right-37 md:bottom-63 md:px-8'
          >
            <Link
              href='/workroom/mine'
              className='flex items-center justify-end gap-3 py-4 md:gap-4 md:py-7'
            >
              <div className='flex flex-col items-end justify-between pl-2 md:pl-3'>
                <span className='text-[14px] font-extrabold md:text-[22px]'>워크룸 리스트</span>
                <span className='text-gray3 text-[10px] font-semibold md:text-[14px]'>
                  내가 만든 워크룸 리스트 보기
                </span>
              </div>
              <List className='text-mainRed size-6 md:size-9' />
            </Link>

            <div className='border-gray5 bg-gray5 h-[1px] w-full px-5' />

            <Link
              href='/workroom/create'
              className='flex items-center justify-end gap-3 py-4 md:gap-4 md:py-7'
            >
              <div className='flex flex-col items-end justify-between'>
                <span className='text-[14px] font-extrabold md:text-[22px]'>나의 워크룸 생성</span>
                <span className='text-gray3 text-[10px] font-semibold md:text-[14px]'>
                  워크룸 만들기
                </span>
              </div>
              <FilePlus className='text-mainRed size-6 md:size-9' />
            </Link>
          </Modal>
          <div className='fixed right-7.5 bottom-42 z-100 border-t-[16px] border-r-[16px] border-l-[16px] border-t-white border-r-transparent border-l-transparent md:right-40.5 md:bottom-59' />
        </>
      )}
    </>
  );
}

// TODO: 반응형으로 고정 위치 조정
