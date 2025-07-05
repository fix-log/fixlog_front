import { FieldValues, UseFormReturn } from 'react-hook-form';

interface TermsAgreementProps<T extends FieldValues> {
  id: string;
  text: string;
  form: UseFormReturn<T>;
  isRequired?: boolean;
  className?: string;
  onClick?: () => void;
}

export default function TermsAgreement<T extends FieldValues>({
  id,
  text,
  form,
  isRequired,
  className,
  onClick,
}: TermsAgreementProps<T>) {
  const isTermsOpen = id === 'isTermsAgreed' || id === 'isPrivacyAgreed';
  if (!className) className = '';

  return (
    <>
      <input id={id} type='checkbox' className='hidden' {...form.register(id)} />
      <label
        htmlFor={id}
        className='!my-2 flex items-center text-[13px]'
        onClick={() => onClick && onClick()}
      >
        <div className='flex cursor-pointer items-center'>
          <div
            id='radio_button'
            className='border-gray4 !mr-1 flex h-[14px] w-[14px] items-center justify-center rounded-full border-1'
          >
            {form.watch(id) && <div className='bg-mainRed h-[8px] w-[8px] rounded-full'></div>}
          </div>
          <p className={className}>
            {text}
            {isRequired && <span className='!ml-1'>{isRequired ? '(필수)' : '(선택)'}</span>}
          </p>
        </div>
        {isTermsOpen && (
          <button className='text-mainRed !ml-auto cursor-pointer font-bold'>보기</button>
        )}
      </label>
    </>
  );
}
