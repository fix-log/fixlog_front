import { UseFormReturn } from 'react-hook-form';

interface FormRadioSelectProps {
  name: string;
  button: string[];
  form: UseFormReturn;
  label?: string;
  isRequired?: boolean;
}

export default function FormRadioSelect({
  label,
  name,
  button,
  form,
  isRequired,
}: FormRadioSelectProps) {
  // 빌드 에러 때문에 임시 추가 (기태)
  console.log(name);
  console.log(form);

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
          <button
            key={item}
            className='border-gray4 text-gray4 !mr-[20px] h-[60px] grow cursor-pointer rounded-[5px] border text-center leading-14 last:!mr-0'
          >
            {item}
          </button>
        ))}
      </ul>
    </div>
  );
}
