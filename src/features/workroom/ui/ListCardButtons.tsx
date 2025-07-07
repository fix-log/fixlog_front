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

  // TODO: 삭제 API 연결하기 (워크룸id를 파라미터로 전달해서), (useCallback으로 감싸기)
  console.log(workroomId);

  return (
    <div className='pointer-events-auto flex flex-col gap-2 md:gap-3'>
      <button
        className='bg-mainRed hover:bg-mainRed/85 h-7.5 w-[68px] rounded-full text-white transition-all duration-200 hover:cursor-pointer max-md:text-[10px] md:h-10 md:w-[150px] md:rounded-[5px]'
        onClick={() => router.push(`/workroom/${workroomId}/edit`)}
      >
        수정하기
      </button>
      <button
        className='bg-gray3 hover:bg-gray3/85 h-7.5 w-[68px] rounded-full text-white transition-all duration-200 hover:cursor-pointer max-md:text-[10px] md:h-10 md:w-[150px] md:rounded-[5px]'
        onClick={() => setIsOpen(true)}
      >
        삭제하기
      </button>

      {isModalOpen && (
        <Modal
          className='px-[32px] py-[40px] md:w-[500px] md:px-[86px] md:py-[70px]'
          setIsOpen={setIsOpen}
        >
          <div className='flex flex-col items-center gap-6 md:gap-13'>
            <div className='flex flex-col items-center gap-1'>
              <h3 className='text-[18px] font-extrabold md:text-[34px]'>
                이 워크룸을 삭제하시겠습니까?
              </h3>
              <span className='text-gray3 text-[10px] md:text-[18px]'>
                삭제된 워크룸은 복구할 수 없습니다.
              </span>
            </div>

            <div className='flex gap-2 md:gap-4'>
              <button
                className='bg-mainRed hover:bg-mainRed/85 h-8 w-24 rounded-[5px] text-white transition-all duration-200 hover:cursor-pointer max-md:text-[10px] md:h-[45px] md:w-[150px]'
                // TODO: 삭제 함수 연결
                onClick={() => console.log('삭제')}
              >
                삭제
              </button>
              <button
                className='h-8 w-24 rounded-[5px] bg-black text-white transition-all duration-200 hover:cursor-pointer hover:bg-black/85 max-md:text-[10px] md:h-[45px] md:w-[150px]'
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
