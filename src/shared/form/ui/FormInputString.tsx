import { useFormContext } from 'react-hook-form';
import { focus, errorFocus } from './TailwindcssUtil';
import { FormValuesKeys } from '@/features/signup/model/schema/Step1';

interface FormInputStringProps {
  type: 'text' | 'number' | 'email' | 'password' | 'url';
  id: FormValuesKeys;
  placeholder: string;
  label?: string;
  isRequired?: boolean;
  children?: React.ReactNode;
}

export default function FormInputString({
  type,
  id,
  placeholder,
  label,
  isRequired,
  children,
}: FormInputStringProps) {
  const { register, formState: {errors} } = useFormContext()
  const focusClassName = errors[id] ? errorFocus : focus;

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
          {...register(id)}
        />
        {children}
      </div>
      {errors[id] && (
        <p className='text-pointDarkYellow -mt-3 pb-3 pl-3'>
          {errors[id].message?.toString()}
        </p>
      )}
    </div>
  );
}
