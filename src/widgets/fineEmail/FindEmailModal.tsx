import Modal from '@/shared/ui/Modal';
import { Dispatch, SetStateAction } from 'react';
import { Check } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface FindEmailModalProps {
  foundEmail: string;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}

export default function FindEmailModal({ foundEmail, setIsModalOpen }: FindEmailModalProps) {
  const router = useRouter();

  return (
    <Modal className='flex w-[700px] px-[75px] py-[70px]' setIsOpen={setIsModalOpen}>
      <Check
        strokeWidth={3}
        className='bg-mainRed20 text-mainRed h-[58px] w-[58px] rounded-full p-3'
      />
      <h1 className='text-h3 px-5 pt-[43px] font-bold'>이메일 찾기 완료</h1>
      <div className='text-gray3 text-h5 flex flex-col items-center pt-[14px] pb-[42px]'>
        <p className='pb-1'>당신의 이메일은</p>
        <p>{`'${foundEmail}'`} 입니다</p>
      </div>
      <div className='flex justify-around text-white'>
        <button
          className='bg-mainBlack mr-[18px] cursor-pointer rounded-[5px] px-6 py-[10px]'
          type='button'
          onClick={() => {
            router.push('/login');
          }}
        >
          로그인 하러 가기
        </button>
        <button
          className='bg-mainRed cursor-pointer rounded-[5px] px-6 py-[10px]'
          type='button'
          onClick={() => {
            router.push('/find-password');
          }}
        >
          비밀번호 찾기
        </button>
      </div>
    </Modal>
  );
}
