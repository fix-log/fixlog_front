'use client';

import {
  Bell,
  Calendar,
  ChevronDown,
  Clock,
  Link,
  MapPin,
  Pencil,
  RotateCw,
  X,
} from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import ColorPalette from './ColorPalette';
import RepeatModal from './RepeatModal';
import NotificationModal from './NotificationModal';
import ScheduleDatePicker from './ScheduleDatePicker';

interface ScheduleFormProps {
  workroomId: string;
  selectedDate: Date;
  // schedule?: Schedule;
  schedule?: { title: string }; // 스케쥴 타입 설정 전에 일단 임시
}

// TODO: 어떻게 해야하나 고민해보기 (텍스트랑 실제 value 연동할 방법을 찾아봐야 할듯)
const TIME_OPTIONS = [
  '09:00 AM',
  '09:10 AM',
  '09:20 AM',
  '09:30 AM',
  '09:40 AM',
  '09:50 AM',
] as const;

export default function ScheduleForm({ workroomId, selectedDate, schedule }: ScheduleFormProps) {
  const router = useRouter();

  console.log(schedule); // 일단 에러 방지
  console.log(selectedDate); // 일단 에러 방지
  console.log(workroomId); // 일단 에러 방지

  // 일정
  // const [period, setPeriod] = useState<string>('');
  // const [isPeriodModalOpen, setIsPeriodModalOpen] = useState<boolean>(false);

  // 반복
  const [repeat, setRepeat] = useState<string>('반복 없음'); // TODO: 백엔드 스키마 확인
  const [isRepeatModalOpen, setIsRepeatModalOpen] = useState<boolean>(false);
  console.log(setRepeat); // 일단 에러 방지

  // 색깔 팔레트
  const [selectedColor, setSelectedColor] = useState<string>('#F74627'); // TODO: 색상 변수 및 타입 추가하기
  const [isColorPaletteOpen, setIsColorPaletteOpen] = useState<boolean>(false);

  // 알림
  // const [notification, setNotification] = useState<string>('');
  const [isNotificationModalOpen, setIsNotificationModalOpen] = useState<boolean>(false);

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
      <label htmlFor='date' className='text-h6 text-mainBlack flex gap-4 font-medium'>
        <Clock className='text-gray2 my-[5px]' size={22} />
        {/* 컴포넌트 분리? */}
        <div className='flex grow flex-col justify-between gap-4'>
          <div className='relative z-10 flex items-center justify-between gap-2'>
            {/* TODO: datepicker 꾸미기 */}
            <ScheduleDatePicker
              value='시작 날짜'
              onClick={() => {
                console.log('시작 날짜');
              }}
              // className='bg-gray6 hover:bg-gray5 h-[35px] w-[115px] cursor-pointer rounded-[5px] px-2 py-1 transition-all duration-200 outline-none'
            />
            <span>~</span>
            {/* TODO: datepicker로 */}
            <ScheduleDatePicker
              value='종료 날짜'
              onClick={() => {
                console.log('종료 날짜');
              }}
              // className='bg-gray6 hover:bg-gray5 h-[35px] w-[115px] cursor-pointer rounded-[5px] px-2 py-1 transition-all duration-200 outline-none'
            />
            <label htmlFor='allDay' className='flex items-center gap-2'>
              <input type='checkbox' id='allDay' />
              <span>종일</span>
            </label>
          </div>

          {/* 하루 종일 체크 시에만 조건부 렌더링 (보이지만 비활성 처리가 더 예쁠듯) */}
          {/* 시작 시간보다 앞선 시간은 고르지 못하게하는 로직도 필요함 */}
          <div className='flex items-center gap-4'>
            <select name='' id=''>
              {TIME_OPTIONS.map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </select>
            <span>~</span>
            <select name='' id=''>
              {TIME_OPTIONS.map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </select>
          </div>
        </div>
      </label>

      {/* 반복 */}
      <label htmlFor='repeat' className='text-h6 flex h-9 items-center gap-4 font-medium'>
        <RotateCw className='text-gray2' size={22} />
        <button
          type='button'
          onClick={() => {
            setIsRepeatModalOpen((prev) => !prev);
          }}
          className='text-h5 bg-gray6 hover:bg-gray5 flex h-9 w-32 cursor-pointer items-center justify-center gap-2 rounded-[5px] font-medium transition-all duration-200'
          style={{ color: repeat === '반복 없음' ? '#808080' : '#202020' }}
        >
          {repeat}
        </button>
      </label>

      {isRepeatModalOpen && <RepeatModal setIsRepeatModalOpen={setIsRepeatModalOpen} />}

      {/* 색깔 */}
      <label htmlFor='color' className='text-h6 relative flex h-9 items-center gap-4 font-medium'>
        <Calendar className='text-gray2' size={22} />
        <button
          type='button'
          onClick={() => {
            // TODO: 오픈 상태에서 다시 클릭하면, 드롭다운 바깥 클릭 -> 버튼 (다시 열림)
            setIsColorPaletteOpen((prev) => !prev);
          }}
          className='bg-gray6 hover:bg-gray5 flex h-9 w-32 cursor-pointer items-center justify-center gap-2 rounded-[5px] transition-all duration-200'
        >
          <div
            className='h-5 w-5 cursor-pointer rounded-full'
            // 동적으로 생성된 클래스명은 빌드 타임에 감지되지 않아서 클래스명으로 적용 불가 -> style로 적용
            style={{ backgroundColor: selectedColor }}
          />
          <span className='text-h6 text-mainBlack font-medium'>Calendar</span>
        </button>

        {isColorPaletteOpen && (
          <ColorPalette
            setSelectedColor={setSelectedColor}
            isColorPaletteOpen={isColorPaletteOpen}
            setIsColorPaletteOpen={setIsColorPaletteOpen}
          />
        )}
      </label>

      {/* 알림 */}
      <label htmlFor='alarm' className='text-h6 flex h-9 items-center gap-4 font-medium'>
        <Bell className='text-gray2' size={22} />
        <button
          type='button'
          onClick={() => {
            setIsNotificationModalOpen((prev) => !prev);
          }}
          className='bg-gray6 hover:bg-gray5 flex h-9 w-32 cursor-pointer items-center justify-center gap-2 rounded-[5px] transition-all duration-200'
        >
          <ChevronDown />
          <span className='text-h6 text-mainBlack font-medium'>알림 추가</span>
        </button>

        {isNotificationModalOpen && (
          <NotificationModal setIsNotificationModalOpen={setIsNotificationModalOpen} />
        )}
      </label>

      {/* 위치 */}
      <label htmlFor='location' className='text-h6 flex h-9 items-center gap-4 font-medium'>
        <MapPin className='text-gray2' size={22} />
        <input id='location' type='text' placeholder='위치' className={textInputPlaceholderClass} />
      </label>

      {/* URL */}
      <label htmlFor='url' className='text-h6 flex h-9 items-center gap-4 font-medium'>
        <Link className='text-gray2' size={22} />
        <input id='url' type='text' placeholder='URL' className={textInputPlaceholderClass} />
      </label>

      {/* 메모 */}
      <label htmlFor='memo' className='text-h6 flex flex-col gap-3 font-medium'>
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
