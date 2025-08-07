'use client';

import FormHeader from '@/shared/form/ui/FormHeader';
import FormSubmitButton from '@/shared/form/ui/FormSubmitButton';
import FormFields from '@/widgets/auth/signup/step3/FormFields';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { SetStateType } from '../Types';
import ScrollToPosition from '@/shared/lib/ScrollToPosition';
import BackIconButton from '@/shared/ui/BackIconButton';
import LeaveConfirmModal from '@/features/profile/LeaveConfirmModal';
import preventLeave from '@/shared/form/model/PreventLeave';

interface Step3Props {
  maxStep: number;
  step: number;
  setStep: Dispatch<SetStateAction<number>>;
  setData: SetStateType;
}

export default function Step3({ maxStep, step, setStep, setData }: Step3Props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
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

  function handleBack() {
    if (form.formState.isDirty && maxStep === 3) { // 프로필 수정일 때만
      setIsModalOpen(true);
      return
    }
    setStep(step - 1);
  }

  return (
    <>
      <BackIconButton onclick={() => handleBack()} className={maxStep === 4 ? 'absolute top-30 left-6' : ''} />
      <div className='flex w-full !max-w-[500px] flex-col items-center'>
        <FormHeader title='기술 역량' />
        <form className='w-full' onSubmit={form.handleSubmit((data) => handleClick(data))}>
          <FormFields />
          <FormSubmitButton
          text={`다음 (${step}/${maxStep})`}
          isSubmitting={form.formState.isSubmitting}
        />
      </form>
      {isModalOpen && leaveGuard}
    </div>
    </>
  );
}

// 유저 프로필 수정과 공유함
