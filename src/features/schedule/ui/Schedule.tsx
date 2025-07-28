'use client';

import { useState } from 'react';
import { EllipsisVertical } from 'lucide-react';
import EditDeleteDropdown from '@/widgets/ui/EditDeleteDropdown';
import Modal from '@/shared/ui/Modal';

export default function Schedule() {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);

  const handleDelete = () => {
    setIsDeleteModalOpen(true);
    console.log('일정 삭제');
  };

  return (
    <li className='relative flex h-[90px] items-center justify-between rounded-l-[10px] bg-violet-50'>
      <div className='h-full w-[15px] rounded-full bg-violet-200' />
      <div className='flex grow flex-col justify-center gap-2 px-[18px]'>
        <span className='text-h6 font-extrabold'>일정 1</span>
        <span className='text-h6 text-gray2 font-semibold'>10:00 ~ 12:00</span>
      </div>
      {/* 서버 컴포넌트로 바꾸고 나면, 컴포넌트 분리 (클라이언트 컴포넌트로) */}
      <button
        onClick={() => {
          setIsDropdownOpen((prev) => !prev);
        }}
        className='mx-1 cursor-pointer p-2 transition-all duration-200 hover:scale-120'
      >
        <EllipsisVertical size={26} />
      </button>

      {isDropdownOpen && (
        <EditDeleteDropdown
          position='top-6 right-12'
          href={`/workroom/워크룸id/schedule/날짜/일정id/edit`}
          handleDelete={handleDelete}
          isOpen={isDropdownOpen}
          onClose={() => setIsDropdownOpen(false)}
        />
      )}

      {isDeleteModalOpen && (
        <Modal setIsOpen={setIsDeleteModalOpen} className='flex w-1/3 flex-col gap-4 px-25 py-18'>
          <h6 className='text-h3 flex flex-col gap-2 text-center font-extrabold'>
            <span>해당 일정을</span>
            <span>삭제하시겠습니까?</span>
          </h6>
          <p className='text-h5 text-gray3 font-semibold'>삭제하시면 다시 복구할 수 없습니다.</p>
          <button
            onClick={() => {
              console.log('해당 일정 삭제');
            }}
            className='bg-mainRed text-body-m hover:bg-mainRed/85 mt-[25px] cursor-pointer rounded-[5px] px-24.5 py-3 font-extrabold text-white transition duration-200'
          >
            해당 일정 삭제하기
          </button>
        </Modal>
      )}
    </li>
  );
}
