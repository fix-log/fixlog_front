import { cn } from '@/shared/lib/util';
import Image from 'next/image';

interface ProfileImageProps {
  isMe: boolean;
  imageUrl: string;
}

export default function ProfileImage({ isMe, imageUrl }: ProfileImageProps) {
  return (
    <Image
      src={imageUrl}
      alt='프로필'
      width={125}
      height={125}
      className={'h-auto w-[125px] ' + cn(isMe && 'cursor-pointer')}
    />
  );
}
