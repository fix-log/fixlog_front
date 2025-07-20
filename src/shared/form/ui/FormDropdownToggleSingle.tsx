import { Dispatch, SetStateAction } from 'react';
import { FieldValues, Path, PathValue, useFormContext } from 'react-hook-form';

interface FormDropdownToggleSingleProps<T extends FieldValues> {
  id: Path<T>;
  data: string[];
  setDisplayText: Dispatch<SetStateAction<string>>;
}

/**
 * @param id selectOptions.ts 파일에 있는 key (zod 스키마의 key와 동일하여야 함)
 * @param data selectOptions.ts 기반 배열값
 * @param setDisplayText 버튼 플레이스홀더 부분 임의 문자열 (setState)
 */
export default function FormDropdownToggleSingle<T extends FieldValues>({
  id,
  data,
  setDisplayText,
}: FormDropdownToggleSingleProps<T>) {
  const { register, setValue } = useFormContext<T>();

  return (
    <ul className='mt-[15px]'>
      {data.map((item) => (
        <div key={item} className='text-gray1 border-gray5 border-t'>
          <input id={item} value={item} type='radio' className='hidden' {...register(id)} />
          <label
            htmlFor={item}
            className='inline-block w-full cursor-pointer p-[13px]'
            onClick={(e) => {
              setDisplayText(item);
              setValue(id as Path<T>, e.currentTarget.textContent as PathValue<T, Path<T>>);
            }}
          >
            {item}
          </label>
        </div>
      ))}
    </ul>
  );
}
