'use client';

import { Dispatch, SetStateAction, useState } from 'react';
import FormDropdownToggle from './FormDropdownToggle';
import { selectOptions, selectOptionsType } from '@/features/auth/signup/model/selectOptions';
import DropdownIcon from './DropdownIcon';
import { FieldValues, Path, useFormContext } from 'react-hook-form';
import { X } from 'lucide-react';
import FormDropdownToggleSingle from './FormDropdownToggleSingle';

interface FormDropdownButtonProps {
  type: 'single' | 'multi';
  id: keyof selectOptionsType;
  label: string;
  open: string | undefined;
  setOpen: Dispatch<SetStateAction<string | undefined>>;
  placeholder: string;
  isRequired?: boolean;
}

/**
 * @param id  selectOptions.ts 파일에 있는 key (zod 스키마의 key와 동일하여야 함)
 */
export default function FormDropdownButton<T extends FieldValues>({
  type,
  id,
  open,
  setOpen,
  label,
  placeholder,
  isRequired,
}: FormDropdownButtonProps) {
  const [displayText, setDisplayText] = useState(placeholder);
  const displayToggle = {
    single: (
      <FormDropdownToggleSingle
        id={id as Path<T>}
        data={selectOptions[id]}
        setDisplayText={setDisplayText}
      />
    ),
    multi: (
      <FormDropdownToggle<T>
        id={id as Path<T>}
        data={selectOptions[id]}
        setDisplayText={setDisplayText}
      />
    ),
  };
  const {
    watch,
    setValue,
    formState: { errors },
  } = useFormContext<T>();
  const selectedItem = watch(id as Path<T>);

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
          'border-gray4 bg-mainWhite text-gray2 !my-[15px] min-h-[60px] w-full cursor-pointer rounded-[5px] border-1 text-left text-[18px]' +
          (open === label ? ' !pt-[14px]' : '')
        }
      >
        <div className='flex w-full items-center'>
          <p className='grow pl-[17px]'>{displayText}</p>
          <DropdownIcon type={type} form={open} target={label} />
        </div>
        {open === label && displayToggle[type]}
      </button>

      {/* 선택된 아이템 태그로 표시 */}
      {Array.isArray(selectedItem) && (
        <div className='flex flex-wrap'>
          {selectedItem?.map((item: string) => (
            <div
              key={item}
              className='text-mainRed bg-mainRed20 -mt-1 mr-[10px] mb-4 flex cursor-pointer items-center gap-x-2 rounded-full px-[10px] py-[5px] font-bold'
              onClick={() => {
              const newItems = selectedItem.filter((v: string) => v !== item);
              setValue(id as Path<T>, newItems, {
                shouldDirty: true,
              });
            }}
            >
              {item}
              <X width={15} height={15} />
            </div>
          ))}
        </div>
      )}

      {errors[id] && (
        <p className='text-pointDarkYellow -mt-3 pb-3 pl-3'>{errors[id].message?.toString()}</p>
      )}
    </div>
  );
}
