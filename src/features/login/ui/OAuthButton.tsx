'use client';

import Image from 'next/image';
import { providerImages } from '../model/ProviderImages';

interface OAuthButtonProps {
  provider: 'github' | 'naver' | 'kakao';
}

export default function OAuthButton({ provider }: OAuthButtonProps) {
  return (
    <Image
      src={providerImages[provider]}
      alt={provider}
      width={60}
      height={60}
      className='!mr-[35px] cursor-pointer last:!mr-0'
    />
  );
}
