'use client';

import { forwardRef, useState } from 'react';
import { ko } from 'date-fns/locale';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ScheduleDatePickerProps {
  value: string;
  onClick: () => void;
  className?: string;
}

export default function ScheduleDatePicker({ value, onClick, className }: ScheduleDatePickerProps) {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

  // 커스텀 인풋 컴포넌트 (버튼형)
  const CustomButtonInput = forwardRef<HTMLButtonElement, ScheduleDatePickerProps>(
    ({ value, onClick, className }, ref) => (
      <button type='button' className={className} onClick={onClick} ref={ref}>
        {value}
      </button>
    ),
  );
  CustomButtonInput.displayName = 'CustomButtonInput';

  return (
    <DatePicker
      selected={selectedDate}
      onChange={(date) => setSelectedDate(date)}
      dateFormat='MM월 dd일 (EEEEE)'
      locale={ko}
      customInput={
        <CustomButtonInput
          value={value}
          onClick={onClick}
          className={
            className ??
            'bg-gray6 hover:bg-gray5 h-[35px] w-[135px] cursor-pointer rounded-[5px] px-2 py-1 transition-all duration-200 outline-none'
          }
          // className='bg-gray6 hover:bg-gray5 h-[35px] w-[115px] cursor-pointer rounded-[5px] px-2 py-1 transition-all duration-200 outline-none'
        />
      }
      popperPlacement='bottom-start'
      // popperModifiers={[
      //   {
      //     name: 'offset',
      //     options: {
      //       offset: [0, 8],
      //     },
      //     fn(state) {
      //       console.log('state로 뭘하지 여긴?');
      //       return state;
      //     },
      //   },
      // ]}
      renderCustomHeader={({
        date,
        decreaseMonth,
        increaseMonth,
        prevMonthButtonDisabled,
        nextMonthButtonDisabled,
      }) => (
        <div className='flex items-center gap-2 px-2 py-1'>
          <button
            type='button'
            onClick={decreaseMonth}
            disabled={prevMonthButtonDisabled}
            className='hover:bg-gray6 cursor-pointer rounded-[5px] p-1 transition-all duration-200'
          >
            <ChevronLeft size={20} />
          </button>
          <span>{`${date.getMonth() + 1}월`}</span>
          <button
            type='button'
            onClick={increaseMonth}
            disabled={nextMonthButtonDisabled}
            className='hover:bg-gray6 cursor-pointer rounded-[5px] p-1 transition-all duration-200'
          >
            <ChevronRight size={20} />
          </button>
        </div>
      )}
      dayClassName={(d) => (d.getDate() === selectedDate!.getDate() ? 'selectedDay' : '')}
    />
  );
}
