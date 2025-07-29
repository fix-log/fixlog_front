'use client';

import { colorChangeAnimation } from '@/shared/ui/Animation';
import { useParams } from 'next/navigation';

export default function ProfileShareButton() {
  const params = useParams().userid;
  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <button
        className={
          'border-mainBlack hover:bg-gray5 mr-4 grow cursor-pointer rounded-[5px] border py-3' +
          colorChangeAnimation
        }
        onClick={() => copyToClipboard(`http://localhost:3000/user/${params}`)}
      >
        프로필 공유
      </button>
    </>
  );
}
