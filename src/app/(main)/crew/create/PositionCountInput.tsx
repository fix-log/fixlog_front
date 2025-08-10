'use client';

import { useState } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';
import { Minus, Plus } from 'lucide-react';

import FormDropdownButton from '@/shared/form/ui/FormDropdownButton';
import FormInputString from '@/shared/form/ui/FormInputString';
import FormIconButton from '@/shared/form/ui/FormPlusButton';

export default function PositionCountInput() {
  const { setValue, control } = useFormContext();
  const [positionList, setPositionList] = useState<{ name: string; count: number }[]>([]);
  const [open, setOpen] = useState<string | undefined>();

  const selectedPosition = useWatch({ control, name: 'position' }) as string;
  const selectedCount = useWatch({ control, name: 'count' }) as string;

  const handleAdd = () => {
    if (!selectedPosition || !selectedCount) return;

    const newItem = { name: selectedPosition, count: Number(selectedCount) };
    const updatedList = [...positionList, newItem];

    setPositionList(updatedList);
    setValue('positions', updatedList);

    // 입력값 초기화
    setValue('position', '');
    setValue('count', '');
  };

  const handleDelete = (index: number) => {
    const updated = [...positionList];
    updated.splice(index, 1);
    setPositionList(updated);
    setValue('positions', updated);
  };

  // TODO: 선언 후 사용하지 않아서, 빌드 에러 때문에 일단 주석처리 할게요! (기태)
  // const isDisabled = !selectedPosition || !selectedCount;

  return (
    <div>
      <p className='text-[18px] font-bold'>
        모집 인원<span className='text-mainRed'>*</span>
      </p>

      <div className='flex w-full items-start'>
        {/* 포지션 드롭다운 */}
        <div className='w-[400px] shrink-0'>
          <FormDropdownButton
            type='single'
            id='position'
            label=''
            open={open}
            setOpen={setOpen}
            placeholder='포지션을 선택해주세요'
            isRequired={false}
          />
        </div>

        {/* 인원수 입력, 버튼 묶음 */}
        <div className='ml-[20px] flex shrink-0 items-start'>
          <div className='w-[200px]'>
            <FormInputString type='number' id='count' placeholder='인원' />
          </div>

          <div>
            {/* + 버튼 */}
            <FormIconButton onClick={handleAdd} icon={<Plus />} />
          </div>
        </div>
      </div>

      {/* 포지션, 인원수 리스트 */}
      <ul className='mb-[10px] space-y-3'>
        {positionList.map((item, index) => (
          <li key={index} className='flex items-center'>
            <input
              type='text'
              readOnly
              value={item.name}
              className='border-gray4 text-gray2 min-h-[60px] w-[400px] rounded-[5px] border bg-white px-4 text-[20px]'
            />

            {/* 인원 수 */}
            <input
              type='text'
              readOnly
              value={item.count}
              className='border-gray4 bg-mainWhite text-gray2 ml-[20px] min-h-[60px] w-[200px] rounded-[5px] border px-4 text-[20px]'
            />
            {/* - 버튼 */}
            <button
              type='button'
              onClick={() => handleDelete(index)}
              className='border-gray4 text-mainRed ml-[20px] min-h-[60px] w-[60px] rounded-[5px] border'
            >
              <Minus className='mx-auto' />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
