'use client';

import { colorChangeAnimation } from '@/shared/ui/Animation';
import Modal from '@/shared/ui/Modal';
import { Check } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function EidtPasswordModal() {
  const router = useRouter();

  return (
    <Modal className='flex w-[700px] px-[75px] py-[70px]'>
      <Check
        strokeWidth={3}
        className='bg-mainRed20 text-mainRed h-[58px] w-[58px] rounded-full p-3'
      />
      <h1 className='text-h3 px-5 pt-[43px] font-bold'>비밀번호 변경 완료</h1>
      <div className='text-gray3 text-h5 flex flex-col items-center pt-[14px] pb-[42px]'>
        <p>비밀번호가 변경되었습니다</p>
      </div>
      <button
        className={
          'bg-mainRed hover:bg-mainDarkRed w-full cursor-pointer rounded-[5px] py-[10px] text-white' +
          colorChangeAnimation
        }
        type='button'
        onClick={() => {
          router.replace('/login');
        }}
      >
        로그인 하러 가기
      </button>
    </Modal>
  );
}
