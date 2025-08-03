'use client';

import { FieldValues, Path, PathValue, useFormContext } from 'react-hook-form';

interface FormFileProps<T extends FieldValues> {
  label: string;
  id: Path<T>;
  isRequired?: boolean;
}

/**
 * @param id zod 스키마 키와 동일하여야 함
 */
export default function FormFile<T extends FieldValues>({
  label,
  id,
  isRequired,
}: FormFileProps<T>) {
  const { watch, setValue } = useFormContext<T>();
  const isFile = watch(id)?.length !== 0 && watch(id);

  return (
    <div className='w-full'>
      {label && (
        <p className='!-mb-3 cursor-default font-bold'>
          {label}
          {isRequired && <span className='text-mainRed'>*</span>}
        </p>
      )}
      <label
        htmlFor='form_file'
        className={
          'border-gray4 bg-mainWhite text-gray4 !my-[15px] inline-block max-h-[60px] min-h-[60px] w-full cursor-pointer overflow-hidden rounded-[5px] border-1 !pl-[17px] text-[20px] leading-14' +
          (isFile ? ' !text-gray1' : '')
        }
      >
        {isFile ? isFile.name : '파일을 등록해주세요'}
      </label>

      {/* 형식이 File이 아닌 FileList를 담아서 onChange로 변경 */}
      <input
        id='form_file'
        type='file'
        className='hidden'
        accept='.pdf'
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) setValue(id, file as PathValue<T, Path<T>>);
        }}
      />
    </div>
  );
}
