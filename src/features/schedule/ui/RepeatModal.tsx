'use client';

import Modal from '@/shared/ui/Modal';
import { Dispatch, SetStateAction } from 'react';

interface RepeatModalProps {
  setIsRepeatModalOpen: Dispatch<SetStateAction<boolean>>;
}

// TODO: 캘린더 요일 상수랑 따로 파일에 합치기
const DAYS = ['일', '월', '화', '수', '목', '금', '토'] as const;

export default function RepeatModal({ setIsRepeatModalOpen }: RepeatModalProps) {
  return (
    <Modal setIsOpen={setIsRepeatModalOpen} className='flex w-1/3 flex-col gap-12 px-16 py-13'>
      <h6 className='text-h3 font-extrabold'>반복 설정</h6>

      {/* 반복 주기 */}
      <div className='flex w-full items-center justify-between'>
        <span className='text-h6 font-semibold'>반복 주기</span>
        <div className='flex items-center gap-6'>
          <input
            type='number'
            className='border-gray3 bg-gray6 font-h6 text-gray1 h-10 w-22 rounded-[5px] text-center outline-none'
          />
          <select
            name=''
            id=''
            className='border-gray3 bg-gray6 font-h6 text-gray1 h-10 w-22 rounded-[5px] text-center outline-none'
          >
            {/* TODO: 옵션 어떻게 꾸미는지 알아보기 (새로 만들어야하나...?) */}
            <option value=''>일</option>
            <option value=''>주</option>
            <option value=''>월</option>
          </select>
        </div>
      </div>

      {/* 반복 요일 */}
      <div className='flex w-full items-center justify-between'>
        <span className='text-h6 font-semibold'>반복 요일</span>

        <div className='flex items-center gap-2'>
          {/* TODO: 맵 돌려서 처리, 체크 상태 추적 참고 용 */}
          {/* <FormLabel
            data-state={field.value === freq.id ? 'checked' : 'unchecked'}
            className='flex w-full items-center justify-center rounded-md py-2.5 font-normal hover:cursor-pointer data-[state=checked]:bg-[var(--point-orange)] dark:data-[state=checked]:text-black'
          ></FormLabel> */}
          {DAYS.map((day) => (
            <label
              htmlFor='repeat'
              key={day}
              className='bg-gray6 text-body-m text-gray1 hover:bg-gray5 flex h-5.5 w-5.5 cursor-pointer items-center justify-center rounded-full transition-all duration-200'
            >
              <input type='radio' name='repeat' id='repeat' className='hidden' />
              {day}
            </label>
          ))}
          {/* 선택된 경우에만 bg-mainRed/30 */}
          {/* <label
            htmlFor='repeat'
            className='bg-mainRed/30 text-body-m text-gray1 flex h-5.5 w-5.5 items-center justify-center rounded-full'
          >
            <input type='radio' name='repeat' id='repeat' className='hidden' />토
          </label> */}
        </div>
      </div>

      {/* 반복 종료 */}
      <div className='flex w-full items-center justify-between'>
        <span className='text-h6 font-semibold'>반복 종료</span>
        {/* TODO: react-datepicker로 다시 */}
        <input
          type='date'
          // selectedDate 받아와서 초기값 설정
          // value={new Date().toISOString().split('T')[0]} // 일단 오늘 날짜 (고정말고 초기값으로만 설정해야함)
          className='bg-gray6 hover:bg-gray5 h-10 w-50.5 cursor-pointer rounded-[5px] text-center transition-all duration-200 outline-none'
        />
      </div>

      {/* 버튼 */}
      <div className='flex w-full items-center justify-between gap-4'>
        <button
          type='button'
          onClick={() => {
            setIsRepeatModalOpen(false);
          }}
          className='bg-mainBlack hover:bg-gray1 text-body-l h-12.5 grow cursor-pointer rounded-[5px] font-extrabold text-white transition-all duration-200'
        >
          취소
        </button>
        <button
          type='button'
          onClick={() => {
            setIsRepeatModalOpen(false);
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
