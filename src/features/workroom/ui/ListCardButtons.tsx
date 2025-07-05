'use client';

import Modal from '@/shared/ui/Modal';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

interface ListCardButtonsProps {
  workroomId: string; // 워크룸 타입 정의 후 수정
}

export default function ListCardButtons({ workroomId }: ListCardButtonsProps) {
  const router = useRouter();
  const [isModalOpen, setIsOpen] = useState<boolean>(false);

  // TODO: 삭제 기능 구현 (워크룸id를 파라미터로 전달해서), (useCallback으로 감싸기)
  console.log(workroomId);

  return (
    <div className='flex flex-col gap-3'>
      <button
        className='bg-mainRed h-10 w-[150px] rounded-[5px] text-white hover:cursor-pointer'
        onClick={() => router.push(`/workroom/${workroomId}/edit`)}
      >
        수정하기
      </button>
      <button
        className='bg-gray3 h-10 w-[150px] rounded-[5px] text-white hover:cursor-pointer'
        onClick={() => setIsOpen(true)}
      >
        삭제하기
      </button>

      {isModalOpen && (
        <Modal className='w-[500px] px-[86px] py-[70px]' setIsOpen={setIsOpen}>
          <div className='flex flex-col items-center gap-13'>
            <div className='flex flex-col items-center gap-1'>
              <h3 className='text-[34px] font-extrabold'>이 워크룸을 삭제하시겠습니까?</h3>
              <span className='text-gray3 text-[18px]'>삭제된 워크룸은 복구할 수 없습니다.</span>
            </div>

            <div className='flex gap-4'>
              <button
                className='bg-mainRed h-[45px] w-[150px] rounded-[5px] text-white hover:cursor-pointer'
                // TODO: 삭제 함수 연결
                onClick={() => console.log('삭제')}
              >
                삭제
              </button>
              <button
                className='h-[45px] w-[150px] rounded-[5px] bg-black text-white hover:cursor-pointer'
                onClick={() => setIsOpen(false)}
              >
                취소
              </button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}
