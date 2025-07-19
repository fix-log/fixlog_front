'use client';

import FormHeader from '@/shared/form/ui/FormHeader';
import FormSubmitButton from '@/shared/form/ui/FormSubmitButton';
import FormFields from '@/widgets/signup/step4/FormFields';
import { useRouter } from 'next/navigation';
import { Dispatch, SetStateAction } from 'react';
import { useFormContext } from 'react-hook-form';
import { SetStateType, StateType } from '../Types';
import { submitSignup } from '@/features/signup/model/submitSignup';

interface Step1Props {
  setStep: Dispatch<SetStateAction<number>>;
  signupData: StateType;
  setSignupData: SetStateType;
}

export default function Step1({ setStep, signupData, setSignupData }: Step1Props) {
  const router = useRouter();
  const form = useFormContext();

  const handleClick = async (data: object) => {
    setStep(1);
    const mergedData = { ...signupData, ...data };
    setSignupData(mergedData);
    try {
      const isSuccess = await submitSignup<typeof mergedData>(mergedData);
      console.log('isSuccess:', isSuccess); // 사용 처리 해뒀습니다 희정사마!
      router.push('/login');
    } catch (err) {
      console.log('실패', err); //요기도 !!
    }
  };

  return (
    <div className='flex w-full !max-w-[500px] flex-col items-center'>
      <FormHeader title='기타 정보' />
      <form className='w-full' onSubmit={form.handleSubmit((data) => handleClick(data))}>
        <FormFields />
        <FormSubmitButton text='회원가입하기' isSubmitting={form.formState.isSubmitting} />
      </form>
    </div>
  );
}
