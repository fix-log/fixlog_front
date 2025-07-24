import { colorChangeAnimation } from '@/shared/ui/Animation';

export default function ProfileShareButton() {
  return (
    <>
      <button
        className={
          'border-mainBlack hover:bg-gray5 mr-4 grow cursor-pointer rounded-[5px] border py-3' +
          colorChangeAnimation
        }
      >
        프로필 공유
      </button>
    </>
  );
}
