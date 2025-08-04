'use client';

import FormHeader from '@/shared/form/ui/FormHeader';
import FormSubmitButton from '@/shared/form/ui/FormSubmitButton';
import FormFields from '@/widgets/auth/signup/step3/FormFields';
import { Dispatch, SetStateAction, useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import { SetStateType } from '../Types';
import ScrollToPosition from '@/shared/lib/ScrollToPosition';

interface Step3Props {
  maxStep: number;
  step: number;
  setStep: Dispatch<SetStateAction<number>>;
  setData: SetStateType;
}

export default function Step3({ maxStep, step, setStep, setData }: Step3Props) {
  const form = useFormContext();

  useEffect(() => {
    if (maxStep === 4) return; // 회원가입 상태에서는 사용하지 않음
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (form.formState.isDirty) e.preventDefault();
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [form.formState.isDirty]);

  function handleClick(data: object) {
    ScrollToPosition();
    setStep(step + 1);
    setData((val) => ({ ...val, ...data }));
  }

  return (
    <div className='flex w-full !max-w-[500px] flex-col items-center'>
      <FormHeader title='기술 역량' />
      <form className='w-full' onSubmit={form.handleSubmit((data) => handleClick(data))}>
        <FormFields />
        <FormSubmitButton
          text={`다음 (${step}/${maxStep})`}
          isSubmitting={form.formState.isSubmitting}
        />
      </form>
    </div>
  );
}

// 유저 프로필 수정과 공유함
