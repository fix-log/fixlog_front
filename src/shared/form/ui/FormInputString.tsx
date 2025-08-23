'use client';

import { FieldValues, Path, useFormContext } from 'react-hook-form';
import { focus, errorFocus } from './TailwindcssUtil';

interface FormInputStringProps<T> {
  type: 'text' | 'number' | 'email' | 'password' | 'url';
  id: Path<T>;
  placeholder: string;
  label?: string;
  isRequired?: boolean;
  children?: React.ReactNode;
  disabled?: boolean;
}

/**
 * @param id zod 스키마 키와 동일하여야 함
 */
export default function FormInputString<T extends FieldValues>({
  type,
  id,
  placeholder,
  label,
  isRequired,
  children,
  disabled,
}: FormInputStringProps<T>) {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext<T>();
  const focusClassName = errors[id] ? errorFocus : focus;
  const disabledClassName = disabled ? ' bg-gray5 text-gray4 ' : '';

  return (
    <div className='w-full'>
      {label && (
        <p className='!-mb-3 cursor-default font-bold'>
          {label}
          {isRequired && <span className='text-mainRed'>*</span>}
        </p>
      )}
      <div className='flex w-full'>
        <input
          className={
            'border-gray4 my-[15px] h-[60px] w-full rounded-[5px] border-1 pr-[20px] pl-[17px] text-[18px] font-semibold focus:outline-none' +
            focusClassName +
            disabledClassName
          }
          type={type}
          placeholder={placeholder}
          disabled={disabled}
          {...register(id)}
        />
        {children}
      </div>
      {errors[id] && (id === 'url' ? watch(id) !== '' : true) && (
        <p className='text-pointDarkYellow -mt-3 pb-3 pl-3'>{errors[id].message?.toString()}</p>
      )}
    </div>
  );
}