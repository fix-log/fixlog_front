'use client';

import { FieldValues, Path, useFormContext } from 'react-hook-form';
import { focus, errorFocus } from './TailwindcssUtil';

interface FormDateRangeProps<T extends FieldValues> {
  startId: Path<T>;
  endId: Path<T>;
  label: string;
  isRequired?: boolean;
}

/**
 * @description 시작일 ~ 마감일 범위 날짜 입력
 */
export default function FormDateRange<T extends FieldValues>({
  startId,
  endId,
  label,
  isRequired = false,
}: FormDateRangeProps<T>) {
  const {
    register,
    // TODO: 선언 후 사용하지 않아서, 빌드 에러 때문에 일단 주석처리 할게요! (기태)
    // watch,
    formState: { errors },
  } = useFormContext<T>();

  const startError = errors[startId];
  const endError = errors[endId];

  const startFocusClass = startError ? errorFocus : focus;
  const endFocusClass = endError ? errorFocus : focus;

  return (
    <div className='w-full'>
      <p className='!-mb-3 cursor-default font-bold'>
        {label}
        {isRequired && <span className='text-mainRed'>*</span>}
      </p>
      <div className='my-[15px] flex w-full items-center gap-4'>
        <input
          type='date'
          {...register(startId)}
          className={`border-gray4 h-[60px] w-full rounded-[5px] border px-[17px] text-[20px] focus:outline-none ${startFocusClass}`}
        />
        <span className='text-gray3 text-lg'>~</span>
        <input
          type='date'
          {...register(endId)}
          className={`border-gray4 h-[60px] w-full rounded-[5px] border px-[17px] text-[20px] focus:outline-none ${endFocusClass}`}
        />
      </div>
      {(startError || endError) && (
        <p className='text-pointDarkYellow -mt-3 pb-3 pl-3'>
          {(startError?.message || endError?.message)?.toString()}
        </p>
      )}
    </div>
  );
}
