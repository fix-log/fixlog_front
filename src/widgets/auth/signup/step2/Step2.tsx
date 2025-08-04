'use client';

import FormHeader from '@/shared/form/ui/FormHeader';
import FormSubmitButton from '@/shared/form/ui/FormSubmitButton';
import { useFormContext } from 'react-hook-form';
import FormFields from '@/widgets/auth/signup/step2/FormFields';
import { Dispatch, SetStateAction, useEffect } from 'react';
import { SetStateType } from '../Types';
import ScrollToPosition from '@/shared/lib/ScrollToPosition';

interface Step2Props {
  maxStep: number;
  step: number;
  setStep: Dispatch<SetStateAction<number>>;
  setData: SetStateType;
  disabled?: boolean;
}

export default function Step2({ maxStep, step, setStep, setData, disabled }: Step2Props) {
  const form = useFormContext();

  useEffect(() => {
    if (maxStep === 4) return; // 회원가입 상태에서는 사용하지 않음
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (form.formState.isDirty) {
        e.preventDefault();
        e.returnValue = ''; // 일부 브라우저 호환성 문제
      }
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
      <FormHeader title='기본 정보' />
      <form className='w-full' onSubmit={form.handleSubmit((data) => handleClick(data))}>
        <FormFields disabled={disabled} />
        <FormSubmitButton
          text={`다음 (${step}/${maxStep})`}
          isSubmitting={form.formState.isSubmitting}
        />
      </form>
    </div>
  );
}

// 유저 프로필 수정과 공유함
// disabled prop는 프로필 수정 전용
