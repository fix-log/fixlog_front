'use client';

import FormHeader from '@/shared/form/ui/FormHeader';
import FormSubmitButton from '@/shared/form/ui/FormSubmitButton';
import { useRouter } from 'next/navigation';
import { useFormContext } from 'react-hook-form';
import FormFields from '@/widgets/auth/signup/step2/FormFields';
import { Dispatch, SetStateAction } from 'react';
import { SetStateType } from '../Types';

interface Step2Props {
  setStep: Dispatch<SetStateAction<number>>;
  setSignupData: SetStateType;
}

export default function Step2({ setStep, setSignupData }: Step2Props) {
  const router = useRouter();
  const form = useFormContext();

  function handleClick(data: object) {
    setStep(3);
    setSignupData((val) => ({ ...val, ...data }));
    router.push('/login/signup');
  }

  return (
    <div className="flex w-full !max-w-[500px] flex-col items-center">
      <FormHeader title="기본 정보" />
      <form
        className="w-full"
        onSubmit={form.handleSubmit((data) => handleClick(data))}
      >
        <FormFields />
        <FormSubmitButton
          text="다음(2/4)"
          isSubmitting={form.formState.isSubmitting}
        />
      </form>
    </div>
  );
}
