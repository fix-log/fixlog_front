'use client';

import FormHeader from '@/shared/form/ui/FormHeader';
import FormSubmitButton from '@/shared/form/ui/FormSubmitButton';
import { useRouter } from 'next/navigation';
import { FieldErrors, useFormContext } from 'react-hook-form';
import Agreement from '@/widgets/auth/signup/step1/Agreement';
import FormFields from '@/widgets/auth/signup/step1/FormFields';
import { Dispatch, SetStateAction } from 'react';
import { SetStateType } from '../Types';
import ScrollToPosition from '@/shared/lib/ScrollToPosition';
import BackIconButton from '@/shared/ui/BackIconButton';

interface Step1Props {
  setStep: Dispatch<SetStateAction<number>>;
  setData: SetStateType;
}

export default function Step1({ setStep, setData }: Step1Props) {
  const router = useRouter();
  const form = useFormContext();

  // 필수약관만 alert 표시
  function onError(errors: FieldErrors<typeof form>) {
    const messages = Object.values(errors).map((err) => err.message);
    if (messages.length > 0) {
      if (!messages[0]?.includes('필수 약관')) return;
      alert(messages[0]);
    }
  }

  function handleClick(data: object) {
    ScrollToPosition();
    setStep(2);
    setData((val) => ({ ...val, ...data }));
    router.push('/login/signup');
  }

  return (
    <>
      <BackIconButton />
      <div className='flex w-full max-w-[500px] flex-col items-center'>
        <FormHeader title='회원가입' />
        <form className='w-full' onSubmit={form.handleSubmit((data) => handleClick(data), onError)}>
          <FormFields />
          <hr className='border-gray5 !my-10 w-full' />
        <Agreement />
        <FormSubmitButton
          text='다음 (1/4)'
          isSubmitting={form.formState.isSubmitting}
          className=''
        />
      </form>
    </div>
    </>
  );
}
