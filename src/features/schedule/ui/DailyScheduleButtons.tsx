'use client';

import Modal from '@/shared/ui/Modal';
import { Trash2 } from 'lucide-react';
import { useState } from 'react';

export default function DailyScheduleButtons() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <>
      <div className='flex h-30 items-center gap-2 px-4 py-5.5'>
        {/* 버튼이 아니라 링크여야 하나? */}
        <button className='border-gray5 text-h4 hover:bg-gray6 h-full grow cursor-pointer rounded-[10px] border px-3.5 text-left font-extrabold transition duration-200'>
          + 새로운 일정 추가
        </button>
        <button
          onClick={() => {
            setIsModalOpen(true);
          }}
          className='border-gray5 hover:bg-gray6 h-full w-[75px] cursor-pointer rounded-[10px] border transition duration-200'
        >
          <Trash2 size={26} className='m-auto' />
        </button>
      </div>

      {isModalOpen && (
        <Modal setIsOpen={setIsModalOpen} className='flex w-1/3 flex-col gap-4 px-25 py-18'>
          <h6 className='text-h3 flex flex-col gap-2 text-center font-extrabold'>
            <span>전체 일정을</span>
            <span>삭제하시겠습니까?</span>
          </h6>
          <p className='text-h5 text-gray3 font-semibold'>삭제하시면 다시 복구할 수 없습니다.</p>
          <button
            onClick={() => {
              console.log('하루 일정 전체 삭제');
            }}
            className='bg-mainRed text-body-m hover:bg-mainRed/85 mt-[25px] cursor-pointer rounded-[5px] px-25 py-3 font-extrabold text-white transition duration-200'
          >
            전체 삭제하기
          </button>
        </Modal>
      )}
    </>
  );
}
