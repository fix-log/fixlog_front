import { FieldValues, Path, useFormContext } from 'react-hook-form';

interface FormRadioSelectProps<T extends FieldValues> {
  id: Path<T>;
  button: string[];
  label?: string;
  isRequired?: boolean;
}

export default function FormRadioSelect<T extends FieldValues>({
  label,
  id,
  button,
  isRequired,
}: FormRadioSelectProps<T>) {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext<T>();

  console.log(id);
  console.log(watch(id));

  return (
    <div className='w-full'>
      {label && (
        <p className='!-mb-3 cursor-default font-bold'>
          {label}
          {isRequired && <span className='text-mainRed'>*</span>}
        </p>
      )}
      <ul className='!my-[15px] flex w-full'>
        {button.map((item) => (
          <div
            key={item}
            className={
              'border-gray4 text-gray4 !mr-[20px] h-[60px] grow rounded-[5px] border text-center leading-14 last:!mr-0' +
              (watch(id) === item ? ' bg-mainRed text-mainWhite' : '')
            }
          >
            <input id={item} type='radio' className='hidden' value={item} {...register(id)} />
            <label htmlFor={item} className='inline-block h-full w-full cursor-pointer'>
              {item}
            </label>
          </div>
        ))}
      </ul>
      {errors[id] && (
        <p className='text-pointDarkYellow -mt-3 pb-3 pl-3'>{errors[id].message?.toString()}</p>
      )}
    </div>
  );
}
