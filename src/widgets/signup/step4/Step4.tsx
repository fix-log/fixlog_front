'use client';

import FormHeader from '@/shared/form/ui/FormHeader';
import FormSubmitButton from '@/shared/form/ui/FormSubmitButton';
import FormFields from '@/widgets/signup/step4/FormFields';
import { Dispatch, SetStateAction, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { SetStateType, StateType } from '../Types';
import { submitSignup } from '@/features/signup/model/submitSignup';
import SignupModal from './SignupModal';

interface Step1Props {
  setStep: Dispatch<SetStateAction<number>>;
  signupData: StateType;
  setSignupData: SetStateType;
}

export default function Step1({ setStep, signupData, setSignupData }: Step1Props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const form = useFormContext();

  const handleClick = async (data: object) => {
    const mergedData = { ...signupData, ...data };
    setSignupData(mergedData);
    try {
      const isSuccess = await submitSignup<typeof mergedData>(mergedData);
      console.log(isSuccess);
      setIsModalOpen(true);
    } catch (err) {
      console.log(err, '실패');
    }
  };

  return (
    <div className='flex w-full !max-w-[500px] flex-col items-center'>
      <FormHeader title='기타 정보' />
      <form className='w-full' onSubmit={form.handleSubmit((data) => handleClick(data))}>
        <FormFields />
        <FormSubmitButton text='회원가입하기' isSubmitting={form.formState.isSubmitting} />
      </form>
      {isModalOpen && <SignupModal setStep={setStep} setIsModalOpen={setIsModalOpen} />}
    </div>
  );
}
