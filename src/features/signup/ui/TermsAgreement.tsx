import { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import TermsDetailModal from './TermsDetailModal';

interface TermsAgreementProps {
  id: string;
  text: string;
  isRequired?: boolean;
  className?: string;
  onClick?: () => void;
}

export default function TermsAgreement({
  id,
  text,
  isRequired,
  className,
  onClick,
}: TermsAgreementProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { register, watch } = useFormContext();
  const isTermsOpen = id === 'isTermsAgreed' || id === 'isPrivacyAgreed';
  if (!className) className = '';

  return (
    <>
      <input id={id} type='checkbox' className='hidden' {...register(id)} />
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
            {watch(id) && <div className='bg-mainRed h-[8px] w-[8px] rounded-full'></div>}
          </div>
          <p className={className}>
            {text}
            {isRequired && <span className='!ml-1'>{isRequired ? '(필수)' : '(선택)'}</span>}
          </p>
        </div>
        {isTermsOpen && (
          <button
            type='button'
            className='text-mainRed !ml-auto cursor-pointer font-bold'
            onClick={() => setIsModalOpen(true)}
          >
            보기
          </button>
        )}
      </label>
      {isModalOpen && (
        <TermsDetailModal
          id={id as 'isPrivacyAgreed' | 'isTermsAgreed'}
          terms={text}
          setIsModalOpen={setIsModalOpen}
        />
      )}
    </>
  );
}
