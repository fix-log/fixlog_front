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
    getValues,
    setValue,
    formState: { errors },
  } = useFormContext<T>();
  const selectedItem = getValues(id as Path<T>);

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
        <div className='flex w-full items-center'>
          <p className='grow !pl-[17px]'>{displayText}</p>
          <DropdownIcon type={type} form={open} target={label} />
        </div>
        {open === label && displayToggle[type]}
      </button>

      {/* 선택된 아이템 태그로 표시 */}
      {typeof selectedItem === 'object' && (
        <div className='flex flex-wrap'>
          {selectedItem.map((item: string) => (
            <div
              key={item}
              className='text-mainRed bg-mainRed20 -mt-1 mr-[10px] mb-4 flex cursor-pointer items-center gap-x-2 rounded-full px-[10px] py-[5px] font-bold'
              onClick={(e) =>
                setValue(
                  id as Path<T>,
                  selectedItem.filter((item: string) => item !== e.currentTarget.textContent),
                )
              }
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
