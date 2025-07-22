'use client';

import { Bell, Calendar, Clock, Link, MapPin, Pencil, RotateCw, X } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface ScheduleFormProps {
  workroomId: string;
  selectedDate: Date;
  // schedule?: Schedule;
  schedule?: {};
}

export default function ScheduleForm({ workroomId, selectedDate, schedule }: ScheduleFormProps) {
  const router = useRouter();

  // 두개밖에 없는데 하지 말까...
  const textInputPlaceholderClass =
    'text-h5 text-gray3 placeholder:text-gray3 w-full font-medium outline-none placeholder:font-medium';

  return (
    <form className='flex flex-col gap-[45px] px-6 py-8'>
      <div className='flex items-center gap-4'>
        <button type='button' onClick={() => router.back()} className='cursor-pointer'>
          <X className='text-gray2' size={32} />
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
      <label htmlFor='date' className='text-h6 flex items-center gap-4 font-extrabold'>
        <Clock className='text-gray2' size={22} />
        <input
          id='date'
          type='text'
          placeholder='날짜 + 시간'
          className='text-h5 w-full placeholder:font-medium'
        />
      </label>

      {/* 반복 */}
      <label htmlFor='repeat' className='text-h6 flex items-center gap-4 font-extrabold'>
        <RotateCw className='text-gray2' size={22} />
        <input
          id='repeat'
          type='text'
          placeholder='반복'
          className='text-h5 w-full placeholder:font-medium'
        />
      </label>

      {/* 색깔 */}
      <label htmlFor='color' className='text-h6 flex items-center gap-4 font-extrabold'>
        <Calendar className='text-gray2' size={22} />
        <input
          id='color'
          type='text'
          placeholder='색깔'
          className='text-h5 w-full placeholder:font-medium'
        />
      </label>

      {/* 알림 */}
      <label htmlFor='alarm' className='text-h6 flex items-center gap-4 font-extrabold'>
        <Bell className='text-gray2' size={22} />
        <input
          id='alarm'
          type='text'
          placeholder='알림'
          className='text-h5 w-full placeholder:font-medium'
        />
      </label>

      {/* 위치 */}
      <label htmlFor='location' className='text-h6 flex items-center gap-4 font-extrabold'>
        <MapPin className='text-gray2' size={22} />
        <input id='location' type='text' placeholder='위치' className={textInputPlaceholderClass} />
      </label>

      {/* URL */}
      <label htmlFor='url' className='text-h6 flex items-center gap-4 font-extrabold'>
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
          className='bg-gray6 text-h6 h-62 rounded-[5px] p-3 outline-none placeholder:font-medium'
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
