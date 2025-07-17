import { Dispatch, SetStateAction } from 'react';
import FormDropdownToggle from './FormDropdownToggle';
import { selectOptions, selectOptionsType } from '@/features/signup/model/selectOptions';
import DropdownIcon from './DropdownIcon';
import { FieldValues, Path, useFormContext } from 'react-hook-form';
import { lengthLimits } from '../model/LengthLimits';
import { X } from 'lucide-react';

interface FormDropdownButtonProps {
  id: keyof selectOptionsType;
  label: string;
  open: string | undefined;
  setOpen: Dispatch<SetStateAction<string | undefined>>;
  placeholder: string;
  isRequired?: boolean;
}

export default function FormDropdownButton<T extends FieldValues>({
  id,
  open,
  setOpen,
  label,
  placeholder,
  isRequired,
}: FormDropdownButtonProps) {
  const {
    getValues,
    setValue,
    formState: { errors },
  } = useFormContext<T>();
  const selectionMessage =
    lengthLimits[id] !== 0 ? `최대 ${lengthLimits[id]}개 선택 가능` : '많이 선택 가능';
  const selectedItem = getValues(id as Path<T>);
  const displayText = open === label ? selectionMessage : placeholder;

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
          <DropdownIcon form={open} target={label} />
        </div>
        {open === label && <FormDropdownToggle<T> id={id as Path<T>} data={selectOptions[id]} />}
      </button>

      {/* 선택된 아이템 태그로 표시 */}
      {selectedItem && (
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
