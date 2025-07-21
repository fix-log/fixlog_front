import Modal from '@/shared/ui/Modal';
import { Check } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Dispatch, SetStateAction } from 'react';

interface EidtPasswordModalProps {
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}

export default function EidtPasswordModal({ setIsModalOpen }: EidtPasswordModalProps) {
  const router = useRouter();

  return (
    <Modal className='flex w-[700px] px-[75px] py-[70px]' setIsOpen={setIsModalOpen}>
      <Check
        strokeWidth={3}
        className='bg-mainRed20 text-mainRed h-[58px] w-[58px] rounded-full p-3'
      />
      <h1 className='text-h3 px-5 pt-[43px] font-bold'>비밀번호 변경 완료</h1>
      <div className='text-gray3 text-h5 flex flex-col items-center pt-[14px] pb-[42px]'>
        <p>비밀번호가 변경되었습니다</p>
      </div>
      <button
        className='bg-mainRed w-full cursor-pointer rounded-[5px] py-[10px] text-white'
        type='button'
        onClick={() => {
          router.push('/login');
        }}
      >
        로그인 하러 가기
      </button>
    </Modal>
  );
}
