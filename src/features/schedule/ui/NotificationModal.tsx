'use client';

import Modal from '@/shared/ui/Modal';
import { Dispatch, SetStateAction } from 'react';

interface NotificationModalProps {
  setIsNotificationModalOpen: Dispatch<SetStateAction<boolean>>;
}

// TODO: 어떻게 해야하나 고민해보기 (텍스트랑 실제 value 연동할 방법을 찾아봐야 할듯)
const TIME_OPTIONS = [
  '오전 09:00',
  '오전 09:30',
  '오전 10:00',
  '오전 10:30',
  '오전 11:00',
  '오전 11:30',
  '오전 12:00',
  '오전 12:30',
  '오후 01:00',
  '오후 01:30',
  '오후 02:00',
  '오후 02:30',
  '오후 03:00',
  '오후 03:30',
  '오후 04:00',
  '오후 04:30',
  '오후 05:00',
  '오후 05:30',
  '오후 06:00',
  '오후 06:30',
  '오후 07:00',
  '오후 07:30',
  '오후 08:00',
  '오후 08:30',
  '오후 09:00',
  '오후 09:30',
  '오후 10:00',
  '오후 10:30',
  '오후 11:00',
  '오후 11:30',
] as const;

export default function NotificationModal({ setIsNotificationModalOpen }: NotificationModalProps) {
  return (
    <Modal setIsOpen={setIsNotificationModalOpen} className='flex flex-col gap-10 px-25 py-15'>
      <h6 className='text-h3 font-extrabold'>알림 설정</h6>

      {/* 시간 설정 */}
      <div className='text-h6 text-mainBlack flex items-center justify-between gap-4 font-semibold'>
        <input
          type='number'
          className='bg-gray6 h-10 w-16 rounded-[5px] text-center outline-none'
        />
        <select name='' id='' className='bg-gray6 h-10 w-16 rounded-[5px] text-center outline-none'>
          <option value=''>일</option>
          <option value=''>주</option>
        </select>
        <span>전</span>
        <select name='' id='' className='bg-gray6 h-10 w-34 rounded-[5px] text-center outline-none'>
          {TIME_OPTIONS.map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
        </select>
      </div>

      {/* 버튼 */}
      <div className='flex w-full items-center justify-between gap-4'>
        <button
          type='button'
          onClick={() => {
            setIsNotificationModalOpen(false);
          }}
          className='bg-mainBlack hover:bg-gray1 text-body-l h-12.5 grow cursor-pointer rounded-[5px] font-extrabold text-white transition-all duration-200'
        >
          취소
        </button>
        <button
          type='button'
          onClick={() => {
            setIsNotificationModalOpen(false);
            // TODO: 상태로 설정 하기
            console.log('확인');
          }}
          className='bg-mainRed text-body-l hover:bg-mainRed/80 h-12.5 grow cursor-pointer rounded-[5px] font-extrabold text-white transition-all duration-200'
        >
          확인
        </button>
      </div>
    </Modal>
  );
}
