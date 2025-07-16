import { FieldValues, Path, PathValue, useFormContext } from 'react-hook-form';
import { lengthLimits } from '../model/LengthLimits';

interface FormDropdownToggleProps<T extends FieldValues> {
  id: Path<T>;
  data: string[];
}

export default function FormDropdownToggle<T extends FieldValues>({
  id,
  data,
}: FormDropdownToggleProps<T>) {
  const { register, watch, setValue } = useFormContext<T>();
  const maxLength = lengthLimits[id];
  // maxLength 0 값일 경우 최대제한 없음

  function isFullAndMissing(item: string) {
    return watch(id)?.length >= maxLength && !watch(id).includes(item);
  }

  if (watch(id) === false) setValue(id, [] as PathValue<T, Path<T>>);

  return (
    <ul className="flex w-full flex-wrap !py-[25px] !pl-[17px]">
      {data.map((item) => (
        <div
          key={item}
          onClick={(e) => e.stopPropagation()}
          className={
            'border-gray6 bg-gray6 text-gray1 !my-[5px] !mr-[15px] rounded-[20px] border !px-[10px] !py-[5px]' +
            (watch(id)?.includes(item)
              ? ' border-mainRed bg-mainWhite text-mainRed border'
              : '')
          }
        >
          <input
            id={item}
            type="checkbox"
            value={item}
            disabled={maxLength ? isFullAndMissing(item) : false}
            className="hidden"
            {...register(id)}
          />
          <label htmlFor={item} className="cursor-pointer">
            {item}
          </label>
        </div>
      ))}
    </ul>
  );
}
