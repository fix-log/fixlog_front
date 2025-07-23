import { FieldValues, Path, PathValue, useFormContext } from 'react-hook-form';
import { lengthLimits } from '../model/LengthLimits';
import { Dispatch, SetStateAction, useEffect } from 'react';

interface FormDropdownToggleProps<T extends FieldValues> {
  id: Path<T>;
  data: string[];
  setDisplayText: Dispatch<SetStateAction<string>>;
}

/**
 * @param id selectOptions.ts 파일에 있는 key (zod 스키마의 key와 동일하여야 함)
 * @param data selectOptions.ts 기반 배열값
 * @param setDisplayText 버튼 플레이스홀더 부분 임의 문자열 (setState)
 */
export default function FormDropdownToggle<T extends FieldValues>({
  id,
  data,
  setDisplayText,
}: FormDropdownToggleProps<T>) {
  const { register, watch, setValue } = useFormContext<T>();
  const maxLength = lengthLimits[id];
  // maxLength 0 값일 경우 최대제한 없음

  useEffect(() => {
    setDisplayText(maxLength === 0 ? '많이 선택 가능' : `최대 ${maxLength}개 선택 가능`);
  }, [maxLength, setDisplayText]);

  useEffect(() => {
    if (watch(id) === false) setValue(id, [] as PathValue<T, Path<T>>);
  }, [id, watch, setValue]);

  function isFullAndMissing(item: string) {
    return watch(id)?.length >= maxLength && !watch(id).includes(item);
  }

  return (
    <ul className='flex w-full flex-wrap !py-[25px] !pl-[17px]'>
      {data.map((item) => (
        <div
          key={item}
          onClick={(e) => e.stopPropagation()}
          className={
            'border-gray6 bg-gray6 text-gray1 !my-[5px] !mr-[15px] rounded-[20px] border !px-[10px] !py-[5px]' +
            (watch(id)?.includes(item) ? ' border-mainRed bg-mainWhite text-mainRed border' : '')
          }
        >
          <input
            id={item}
            type='checkbox'
            value={item}
            disabled={maxLength ? isFullAndMissing(item) : false}
            className='hidden'
            {...register(id)}
          />
          <label htmlFor={item} className='cursor-pointer'>
            {item}
          </label>
        </div>
      ))}
    </ul>
  );
}
