'use client';

import { Bell, Calendar, Clock, Link, MapPin, Pencil, RotateCw, X } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import ColorPalette from './ColorPalette';

interface ScheduleFormProps {
  workroomId: string;
  selectedDate: Date;
  // schedule?: Schedule;
  schedule?: {}; // 스케쥴 타입 설정 전에 일단 임시
}

export default function ScheduleForm({ workroomId, selectedDate, schedule }: ScheduleFormProps) {
  const router = useRouter();

  // 일정
  const [period, setPeriod] = useState<string>('');
  const [isPeriodModalOpen, setIsPeriodModalOpen] = useState<boolean>(false);

  // 반복
  const [repeat, setRepeat] = useState<string>('');
  const [isRepeatModalOpen, setIsRepeatModalOpen] = useState<boolean>(false);

  // 색깔 팔레트
  const [selectedColor, setSelectedColor] = useState<string>('#F74627'); // TODO: 색상 변수 및 타입 추가하기
  const [isColorPaletteOpen, setIsColorPaletteOpen] = useState<boolean>(false);

  // 두개밖에 없는데 하지 말까...
  const textInputPlaceholderClass =
    'text-h5 text-gray3 placeholder:text-gray3 w-full border border-transparent font-medium outline-none placeholder:font-medium focus:border-b-gray5 focus:border-b-1';

  return (
    <form className='flex flex-col gap-10 px-6 py-8'>
      <div className='flex items-center'>
        <button
          type='button'
          onClick={() => router.back()}
          className='hover:bg-gray6 translate-x-[-8px] cursor-pointer rounded-[5px] p-1 transition-all duration-200'
        >
          <X className='text-gray2' size={28} />
        </button>

        {/* 제목 */}
        <input
          id='title'
          type='text'
          placeholder='제목 추가'
          className='border-gray5 text-h5 w-full border-b py-3 outline-none placeholder:font-medium'
        />
      </div>

      {/* 날짜 + 시간 */}
      <label htmlFor='date' className='text-h6 flex h-9 items-center gap-4 font-extrabold'>
        <Clock className='text-gray2' size={22} />
        <input
          id='date'
          type='text'
          placeholder='날짜 + 시간'
          className='text-h5 w-full placeholder:font-medium'
        />
      </label>

      {/* 반복 */}
      <label htmlFor='repeat' className='text-h6 flex h-9 items-center gap-4 font-extrabold'>
        <RotateCw className='text-gray2' size={22} />
        <input
          id='repeat'
          type='text'
          placeholder='반복'
          className='text-h5 w-full placeholder:font-medium'
        />
      </label>

      {/* 색깔 */}
      <label
        htmlFor='color'
        className='text-h6 relative flex h-9 items-center gap-4 font-extrabold'
      >
        <Calendar className='text-gray2' size={22} />
        <button
          type='button'
          onClick={() => {
            setIsColorPaletteOpen((prev) => !prev);
          }}
          className='bg-gray6 hover:bg-gray5 flex h-9 w-32 cursor-pointer items-center justify-center gap-2 rounded-[5px] transition-all duration-200'
        >
          <div
            className='h-5 w-5 cursor-pointer rounded-full'
            // 동적으로 생성된 클래스명은 빌드 타임에 감지되지 않아서 클래스명으로 적용 불가 -> style로 적용
            style={{ backgroundColor: selectedColor }}
          />
          <span className='text-h6 text-gray3 font-medium'>Calendar</span>
        </button>

        {isColorPaletteOpen && (
          <ColorPalette
            setSelectedColor={setSelectedColor}
            setIsColorPaletteOpen={setIsColorPaletteOpen}
          />
        )}
      </label>

      {/* 알림 */}
      <label htmlFor='alarm' className='text-h6 flex h-9 items-center gap-4 font-extrabold'>
        <Bell className='text-gray2' size={22} />
        <input
          id='alarm'
          type='text'
          placeholder='알림'
          className='text-h5 w-full placeholder:font-medium'
        />
      </label>

      {/* 위치 */}
      <label htmlFor='location' className='text-h6 flex h-9 items-center gap-4 font-extrabold'>
        <MapPin className='text-gray2' size={22} />
        <input id='location' type='text' placeholder='위치' className={textInputPlaceholderClass} />
      </label>

      {/* URL */}
      <label htmlFor='url' className='text-h6 flex h-9 items-center gap-4 font-extrabold'>
        <Link className='text-gray2' size={22} />
        <input id='url' type='text' placeholder='URL' className={textInputPlaceholderClass} />
      </label>

      {/* 메모 */}
      <label htmlFor='memo' className='text-h6 flex flex-col gap-3 font-extrabold'>
        <div className='flex items-center gap-4'>
          <Pencil className='text-gray2' size={22} />
          <span className='text-h5 text-gray3 font-medium'>메모</span>
        </div>
        <textarea
          id='memo'
          className='bg-gray6 text-h6 h-62 resize-none rounded-[5px] p-3 font-medium outline-none placeholder:font-medium'
        />
      </label>

      <button
        type='submit'
        className='bg-mainRed text-body-l hover:bg-mainRed/80 h-15 w-full cursor-pointer rounded-[5px] font-extrabold text-white transition-all duration-200'
      >
        저장 하기
      </button>
    </form>
  );
}
