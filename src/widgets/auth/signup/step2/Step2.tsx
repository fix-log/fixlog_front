'use client';

import FormHeader from '@/shared/form/ui/FormHeader';
import FormSubmitButton from '@/shared/form/ui/FormSubmitButton';
import { useFormContext } from 'react-hook-form';
import FormFields from '@/widgets/auth/signup/step2/FormFields';
import { Dispatch, SetStateAction, useState } from 'react';
import { SetStateType } from '../Types';
import ScrollToPosition from '@/shared/lib/ScrollToPosition';
import BackIconButton from '@/shared/ui/BackIconButton';
import { useRouter } from 'next/navigation';
import preventLeave from '@/shared/form/model/PreventLeave';

interface Step2Props {
  maxStep: number;
  step: number;
  setStep: Dispatch<SetStateAction<number>>;
  setData: SetStateType;
  disabled?: boolean;
}

export default function Step2({ maxStep, step, setStep, setData, disabled }: Step2Props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const form = useFormContext();
  const router = useRouter();

  function handleClick(data: object) {
    ScrollToPosition();
    setStep(step + 1);
    setData((val) => ({ ...val, ...data }));
  }

  function handleBack() {
    history.back();
  }

  return (
    <>
      {/* maxStep 4 = 회원가입, 3 = 프로필수정 */}
      {maxStep === 4 ? (
        <BackIconButton onclick={() => setStep(step - 1)} className='absolute top-30 left-6' />
      ) : (
        <BackIconButton onclick={() => handleBack()} />
      )}
      <div className='flex w-full !max-w-[500px] flex-col items-center'>
        <FormHeader title='기본 정보' />
        <form className='w-full' onSubmit={form.handleSubmit((data) => handleClick(data))}>
          <FormFields disabled={disabled} />
          <FormSubmitButton
            text={`다음 (${step}/${maxStep})`}
            isSubmitting={form.formState.isSubmitting}
          />
        </form>
      </div>
    </>
  );
}

// 유저 프로필 수정과 공유함
// disabled prop는 프로필 수정 전용
