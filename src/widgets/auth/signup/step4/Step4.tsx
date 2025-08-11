'use client';

import FormHeader from '@/shared/form/ui/FormHeader';
import FormSubmitButton from '@/shared/form/ui/FormSubmitButton';
import FormFields from '@/widgets/auth/signup/step4/FormFields';
import { Dispatch, SetStateAction, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { SetStateType } from '../Types';
import { submitSignup } from '@/features/auth/signup/model/submitSignup';
import SignupModal from './SignupModal';
import EditProfileModal from '@/features/profile/EditProfileModal';
import BackIconButton from '@/shared/ui/BackIconButton';

interface Step1Props {
  step: 3 | 4; // 3: 프로필 수정, 4: 회원가입
  setStep: Dispatch<SetStateAction<number>>;
  setData: SetStateType;
}

export default function Step1({ step, setStep, setData }: Step1Props) {
  const [isCompleteModalOpen, setIsCompleteModalOpen] = useState(false); // 완료 모달
  const form = useFormContext();

  const submitConfig =
    step === 4 // 회원가입일 때
      ? {
          text: '회원가입하기',
          api: '',
          modal: <SignupModal setStep={setStep} setIsModalOpen={setIsCompleteModalOpen} />,
        }
      : // 프로필 수정일 때
        {
          text: '프로필 수정하기',
          api: '',
          modal: <EditProfileModal setStep={setStep} setIsModalOpen={setIsCompleteModalOpen} />,
        };

  const handleClick = async (data: object) => {
    const mergedData = { ...data, ...data };
    setData(mergedData);
    try {
      const isSuccess = await submitSignup<typeof mergedData>(mergedData);
      console.log(isSuccess);
      setIsCompleteModalOpen(true);
    } catch (err) {
      console.log(err, '실패');
    }
  };

  function handleBack() {
    setStep(step - 1);
  }

  return (
    <>
      <BackIconButton
        onclick={() => handleBack()}
        className={step === 4 ? 'absolute top-30 left-6' : ''}
      />
      <div className='flex w-full !max-w-[500px] flex-col items-center'>
        <FormHeader title='기타 정보' />
        <form className='w-full' onSubmit={form.handleSubmit((data) => handleClick(data))}>
          <FormFields />
          <FormSubmitButton text={submitConfig.text} isSubmitting={form.formState.isSubmitting} />
        </form>
        {isCompleteModalOpen && submitConfig.modal}
      </div>
    </>
  );
}

// 유저 프로필 수정과 공유함
