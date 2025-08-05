'use client';

import { colorChangeAnimation } from '@/shared/ui/Animation';
import Modal from '@/shared/ui/Modal';
import { useRouter } from 'next/navigation';
import { Dispatch, SetStateAction } from 'react';

interface LeaveConfirmModalProps {
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export default function LeaveConfirmModal({ setOpen }: LeaveConfirmModalProps) {
  const router = useRouter();

  return (
    <Modal className='flex px-[75px] py-[70px]' setIsOpen={setOpen}>
      <h1 className='text-[35px] font-extrabold'>저장하지 않은</h1>
      <h1 className='text-[34px] font-extrabold'>변경사항이 있습니다</h1>
      <div className='text-gray3 text-h5 flex flex-col items-center pt-[14px] pb-[42px]'>
        <p className='pb-1 font-semibold'>지금 나가시면 변경하신 내용은 반영되지 않습니다</p>
      </div>
      <div className='flex w-full justify-evenly font-extrabold'>
        <button
          className={
            'bg-mainBlack max-h-[45px] w-full max-w-[135px] cursor-pointer rounded-[5px] py-[10px] text-white hover:bg-black ' +
            colorChangeAnimation
          }
          type='button'
          onClick={() => {
            router.back();
            setOpen(false);
          }}
        >
          나가기
        </button>
        <button
          className={
            'bg-mainRed hover:bg-mainDarkRed max-h-[45px] w-full max-w-[135px] cursor-pointer rounded-[5px] py-[10px] text-white ' +
            colorChangeAnimation
          }
          type='button'
          onClick={() => {
            setOpen(false);
          }}
        >
          머무르기
        </button>
      </div>
    </Modal>
  );
}
