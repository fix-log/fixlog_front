'use client';

import NormalModal from '@/shared/ui/NormalModal';
import { useRouter } from 'next/navigation';
import { Dispatch, SetStateAction } from 'react';

interface SignupModalProps {
  setStep: Dispatch<SetStateAction<number>>;
}

export default function SignupModal({ setStep }: SignupModalProps) {
  const router = useRouter();
  const subtext = ['지금 바로 픽스로그와 함께', '나만의 프로젝트를 만들어보세요!'];
  const button = [
    {
      text: '확인',
      event: () => {
        router.push('/login');
        setStep(1);
      },
    },
  ];

  return (
    <NormalModal title='회원가입 완료' subtext={subtext} buttons={button} />
  );
}
