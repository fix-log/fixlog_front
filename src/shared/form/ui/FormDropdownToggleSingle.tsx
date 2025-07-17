import { Dispatch, SetStateAction } from 'react';
import { FieldValues, Path, useFormContext } from 'react-hook-form';

interface FormDropdownToggleSingleProps<T extends FieldValues> {
  id: Path<T>;
  data: string[];
  setDisplayText: Dispatch<SetStateAction<string>>;
}

export default function FormDropdownToggleSingle<T extends FieldValues>({
  id,
  data,
  setDisplayText,
}: FormDropdownToggleSingleProps<T>) {
  const { register } = useFormContext();
  return (
    <ul className='mt-[15px]'>
      {data.map((item) => (
        <div key={item} className='text-gray1 border-gray5 border-t'>
          <input id={item} type='radio' className='hidden' {...register(id)} />
          <label
            htmlFor={item}
            className='inline-block w-full cursor-pointer p-[13px]'
            onClick={() => setDisplayText(item)}
          >
            {item}
          </label>
        </div>
      ))}
    </ul>
  );
}
