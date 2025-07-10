import { FieldValues, Path, useFormContext } from 'react-hook-form';

interface FormFileProps<T extends FieldValues> {
  label: string;
  id: Path<T>;
  isRequired?: boolean;
}

export default function FormFile<T extends FieldValues>({
  label,
  id,
  isRequired,
}: FormFileProps<T>) {
  const { register, watch } = useFormContext<T>();
  console.log('watch(portpolio)== ', watch(id));

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
        className='border-gray4 bg-mainWhite text-gray4 !my-[15px] inline-block max-h-[60px] min-h-[60px] w-full cursor-pointer rounded-[5px] border-1 !pl-[17px] text-[20px] leading-14'
      >
        파일을 등록해주세요
      </label>
      <input id='form_file' type='file' className='hidden' accept='.pdf' {...register(id)} />
    </div>
  );
}
