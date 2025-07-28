'use client';

import { FieldValues, Path, useFormContext } from 'react-hook-form';
import { focus, errorFocus } from './TailwindcssUtil';

interface FormDateProps<T extends FieldValues> {
  id: Path<T>;
  label?: string;
  placeholder?: string;
  isRequired?: boolean;
}

export default function FormDate<T extends FieldValues>({
  id,
  label,
  placeholder = '날짜를 선택해주세요',
  isRequired,
}: FormDateProps<T>) {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext<T>();

  const focusClassName = errors[id] ? errorFocus : focus;

  return (
    <div className='w-full'>
      {label && (
        <p className='!-mb-3 cursor-default font-bold'>
          {label}
          {isRequired && <span className='text-mainRed'>*</span>}
        </p>
      )}
      <input
        type='date'
        {...register(id)}
        placeholder={placeholder}
        className={
          'border-gray4 !my-[15px] h-[60px] w-full rounded-[5px] border px-[17px] text-[18px] focus:outline-none' +
          focusClassName
        }
      />
      {errors[id] && (
        <p className='text-pointDarkYellow -mt-3 pb-3 pl-3'>{errors[id]?.message?.toString()}</p>
      )}
    </div>
  );
}
