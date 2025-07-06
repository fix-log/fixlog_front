'use client';

// import FormRegister from '../model/FormRegister';
import { FormErrorMessageType } from '../model/FormErrorMessage';
import { FieldValues, UseFormReturn } from 'react-hook-form';
import { focus, errorFocus } from './TailwindcssUtil';

interface FormInputStringProps<T extends FieldValues> {
  type: 'text' | 'number' | 'email' | 'password' | 'url';
  name: keyof FormErrorMessageType;
  placeholder: string;
  form: UseFormReturn<T>;
  label?: string;
  isRequired?: boolean;
  children?: React.ReactNode;
}

export default function FormInputString<T extends FieldValues>({
  type,
  name,
  placeholder,
  form,
  label,
  isRequired,
  children,
}: FormInputStringProps<T>) {
  const focusClassName = form.formState.errors[name] ? errorFocus : focus;

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
            'border-gray4 !my-[15px] h-[60px] w-full rounded-[5px] border-1 !pr-[20px] !pl-[17px] text-[20px] focus:outline-none' +
            focusClassName
          }
          type={type}
          placeholder={placeholder}
          {...form.register(name)}
        />
        {children}
      </div>
      {form.formState.errors[name] && (
        <p className='text-pointDarkYellow -mt-3 pb-3 pl-3'>
          {form.formState.errors[name].message?.toString()}
        </p>
      )}
    </div>
  );
}
