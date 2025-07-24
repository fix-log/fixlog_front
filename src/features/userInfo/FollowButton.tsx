import { colorChangeAnimation } from '@/shared/ui/Animation';
import Link from 'next/link';

export default function FollowButton() {
  return (
    <>
      <button
        className={
          'bg-mainBlack grow-3 cursor-pointer rounded-[5px] py-3 leading-[1.8] text-white hover:bg-black' +
          colorChangeAnimation
        }
      >
        팔로우
      </button>
      <Link
        href={'profile/edit'}
        className={
          'border-mainBlack hover:bg-gray5 grow rounded-[5px] border py-3 leading-[1.8]' +
          colorChangeAnimation
        }
      >
        픽레터 보내기
      </Link>
    </>
  );
}
