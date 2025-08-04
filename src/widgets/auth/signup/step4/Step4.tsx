'use client';

import FormHeader from '@/shared/form/ui/FormHeader';
import FormSubmitButton from '@/shared/form/ui/FormSubmitButton';
import FormFields from '@/widgets/auth/signup/step4/FormFields';
import { Dispatch, SetStateAction, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { SetStateType, StateType } from '../Types';
import { submitSignup } from '@/features/auth/signup/model/submitSignup';
import SignupModal from './SignupModal';
import EditProfileModal from '@/features/profile/model/EditProfileModal';

interface Step1Props {
  step: 3 | 4; // 3: 프로필 수정, 4: 회원가입
  setStep: Dispatch<SetStateAction<number>>;
  data: StateType;
  setData: SetStateType;
}

export default function Step1({ step, setStep, data, setData }: Step1Props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const form = useFormContext();
  console.log(step, 'step');
  const submitConfig =
    step === 4 // 회원가입일 때
      ? {
          text: '회원가입하기',
          api: '',
          modal: <SignupModal setStep={setStep} setIsModalOpen={setIsModalOpen} />,
        }
      : // 프로필 수정일 때
        {
          text: '프로필 수정하기',
          api: '',
          modal: <EditProfileModal setStep={setStep} setIsModalOpen={setIsModalOpen} />,
        };

  const handleClick = async (data: object) => {
    const mergedData = { ...data, ...data };
    setData(mergedData);
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
        <FormSubmitButton text={submitConfig.text} isSubmitting={form.formState.isSubmitting} />
      </form>
      {isModalOpen && submitConfig.modal}
    </div>
  );
}

// 유저 프로필 수정과 공유함
