import { colorChangeAnimation } from '@/shared/ui/Animation';
import Link from 'next/link';

export default function EditProfileButton() {
  return (
    <>
      <Link
        href={'/profile/edit-account'}
        className={
          'bg-mainRed hover:bg-mainDarkRed grow-2 rounded-[5px] py-3 leading-[0.5] md:leading-[1.5] text-white' +
          colorChangeAnimation
        }
      >
        계정 정보 수정
      </Link>
      <Link
        href={'/profile/edit-profile'}
        className={
          'bg-mainBlack grow-2 rounded-[5px] py-3 leading-[0.5] md:leading-[1.5] text-white hover:bg-black' +
          colorChangeAnimation
        }
      >
        프로필 수정
      </Link>
    </>
  );
}
