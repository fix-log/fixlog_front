import { useFormContext } from 'react-hook-form';
import { FormErrorMessageType } from '../model/FormErrorMessage';
import { focus, errorFocus } from './TailwindcssUtil';

interface FormInputStringProps {
  type: 'text' | 'number' | 'email' | 'password' | 'url';
  name: keyof FormErrorMessageType;
  placeholder: string;
  label?: string;
  isRequired?: boolean;
  children?: React.ReactNode;
}

export default function FormInputString({
  type,
  name,
  placeholder,
  label,
  isRequired,
  children,
}: FormInputStringProps) {
  const { register, formState: {errors} } = useFormContext()
  const focusClassName = errors[name] ? errorFocus : focus;

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
          {...register(name)}
        />
        {children}
      </div>
      {errors[name] && (
        <p className='text-pointDarkYellow -mt-3 pb-3 pl-3'>
          {errors[name].message?.toString()}
        </p>
      )}
    </div>
  );
}
