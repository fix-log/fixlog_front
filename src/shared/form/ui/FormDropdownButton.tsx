import { Dispatch, SetStateAction } from 'react';
import FormDropdownToggle from './FormDropdownToggle';
import { selectOptions, selectOptionsType } from '@/features/signup/model/selectOptions';
import DropdownIcon from './DropdownIcon';

interface FormDropdownButtonProps {
  label: string;
  data: keyof selectOptionsType;
  open: string | undefined;
  setOpen: Dispatch<SetStateAction<string | undefined>>;
  placeholder: string;
  isRequired?: boolean;
}

export default function FormDropdownButton({
  open,
  setOpen,
  data,
  label,
  placeholder,
  isRequired,
}: FormDropdownButtonProps) {
  function handleClick() {
    setOpen(open === label ? undefined : label);
  }

  return (
    <div className='w-full'>
      {label && (
        <p className='!-mb-3 cursor-default font-bold'>
          {label}
          {isRequired && <span className='text-mainRed'>*</span>}
        </p>
      )}
      <button
        type='button'
        onClick={() => handleClick()}
        className={
          'border-gray4 bg-mainWhite text-gray4 !my-[15px] min-h-[60px] w-full cursor-pointer rounded-[5px] border-1 text-left text-[20px]' +
          (open === label ? ' !pt-[14px]' : '')
        }
      >
        <div className='flex w-full'>
          <p className='grow !pl-[17px]'>{placeholder}</p>
          <DropdownIcon form={open} target={label} />
        </div>
        {open === label && <FormDropdownToggle data={selectOptions[data]} />}
      </button>
    </div>
  );
}
