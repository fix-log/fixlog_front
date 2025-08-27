import { colorChangeAnimation } from '@/shared/ui/Animation';
import Link from 'next/link';

export default function EditProfileButton() {
  return (
    <>
      <Link
        href={'edit-account'}
        className={
          'bg-mainRed hover:bg-mainDarkRed grow-2 rounded-[5px] py-[30px] lg:py-3 leading-[0.5] lg:leading-[1.5] text-white' +
          colorChangeAnimation
        }
      >
        계정 정보 수정
      </Link>
      <Link
        href={'edit-profile'}
        className={
          'bg-mainBlack grow-2 rounded-[5px] py-[30px] lg:py-3 leading-[0.5] lg:leading-[1.5] text-white hover:bg-black' +
          colorChangeAnimation
        }
      >
        프로필 수정
      </Link>
    </>
  );
}
