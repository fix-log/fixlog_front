'use client';

import NormalModal from '@/shared/ui/NormalModal';
import { useRouter } from 'next/navigation';

export default function EidtPasswordModal() {
  const router = useRouter();
  const subtext = ['비밀번호가 변경되었습니다'];
  const button = [
    {
      text: '로그인 하러 가기',
      event: () => router.replace('/login'),
      classname: 'bg-mainRed hover:bg-mainDarkRed',
    },
  ];

  return <NormalModal title='비밀번호 변경 완료' subtext={subtext} buttons={button} />;
}
