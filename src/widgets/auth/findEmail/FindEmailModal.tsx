'use client';

import { useRouter } from 'next/navigation';
import NormalModal from '@/shared/ui/NormalModal';

interface FindEmailModalProps {
  foundEmail: string;
}

export default function FindEmailModal({ foundEmail }: FindEmailModalProps) {
  const router = useRouter();
  const text = ['당신의 이메일은', `'${foundEmail}' 입니다`];
  const button = [
    { text: '로그인 하러 가기', event: () => router.push('/login') },
    {
      text: '비밀번호 찾기',
      event: () => router.push('/login/find-password'),
      classname: 'bg-mainRed hover:bg-mainDarkRed ',
    },
  ];

  return (
    <NormalModal title='이메일 찾기 완료' subtext={text} buttons={button} check={true} />
  );
}
