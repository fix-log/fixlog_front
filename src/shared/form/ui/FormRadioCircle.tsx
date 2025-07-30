'use client';

import { useFormContext } from 'react-hook-form';

interface Props {
  id: string;
  options: string[];
  isRequired?: boolean;
}

export default function FormRadioCircle({ id, options, isRequired = false }: Props) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const error = errors[id]?.message as string | undefined;

  return (
    <div className='mb-6'>
      <div className='flex gap-6'>
        {options.map((option) => (
          <label key={option} className='flex items-center gap-2 text-base text-gray-700'>
            <input
              type='radio'
              value={option}
              {...register(id, { required: isRequired })}
              className='accent-mainRed text-mainRed focus:ring-mainRed h-[20px] w-[20px] rounded-full border border-gray-300 focus:ring-2'
            />
            {option}
          </label>
        ))}
      </div>

      {error && <p className='text-mainRed mt-1 text-sm'>{error}</p>}
    </div>
  );
}
