'use client';

import { isLoginedStore } from '@/entities/auth/IsLoginedStore';
import Modal from '@/shared/ui/Modal';
import { Check } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Dispatch, SetStateAction } from 'react';

interface EditProfileModalProps {
  setStep: Dispatch<SetStateAction<number>>;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}

export default function EditProfileModal({ setStep, setIsModalOpen }: EditProfileModalProps) {
  const userId = isLoginedStore((s) => s.userId);
  const router = useRouter();

  return (
    <Modal className='flex px-[75px] py-[70px]' setIsOpen={setIsModalOpen}>
      <Check
        strokeWidth={3}
        className='bg-mainRed20 text-mainRed h-[58px] w-[58px] rounded-full p-3'
      />
      <h1 className='text-h3 pt-[43px] font-bold'>프로필 수정 완료</h1>
      <div className='text-gray3 text-h5 flex flex-col items-center pt-[14px] pb-[42px]'>
        <p className='pb-1'>프로필 내용이 성공적으로</p>
        <p>수정 완료 되었습니다!</p>
      </div>
      <button
        className='bg-mainRed w-full cursor-pointer rounded-[5px] py-[10px] text-white'
        type='button'
        onClick={() => {
          router.push(`/profile/${userId}/info`);
          setStep(1);
        }}
      >
        확인
      </button>
    </Modal>
  );
}
