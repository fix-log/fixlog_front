'use client';

import FormRegister from '../model/FormRegister';
import { FormErrorMessageType } from '../model/FormErrorMessage';
import { UseFormReturn } from 'react-hook-form';

interface InputStringProps {
  type: 'text' | 'number' | 'email' | 'password';
  name: keyof FormErrorMessageType;
  placeholder: string;
  form: UseFormReturn;
  label?: string;
  isRequired?: boolean;
  children?: React.ReactNode;
}

export default function InputString({
  type,
  name,
  placeholder,
  form,
  label,
  isRequired,
  children,
}: InputStringProps) {
  return (
    <div className='w-full'>
      {label && (
        <p className='cursor-default'>
          {label}
          {isRequired && <span className='text-mainRed'>*</span>}
        </p>
      )}
      <div className='flex w-full'>
        <input
          className='border-gray4 focus:border-pointDarkYellow/50 !my-[10px] h-[60px] w-full rounded-[5px] border-1 !pr-[20px] !pl-[17px] text-[20px] focus:shadow-[0_0_3.6px_#CDB200] focus:outline-none'
          type={type}
          placeholder={placeholder}
          {...FormRegister({ register: form.register, name })}
        />
        {children}
      </div>
      {form.formState.errors[name] && (
        <p className='text-pointDarkYellow !-mt-2 !pl-3'>
          {form.formState.errors[name].message?.toString()}
        </p>
      )}
    </div>
  );
}
