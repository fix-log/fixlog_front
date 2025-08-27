'use client';

import { useParams } from 'next/navigation';
import { toast } from 'sonner';

export default function ProfileShareButton() {
  const params = useParams().userid;
  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      toast.success('링크가 복사되었습니다', {
        position: 'top-center',
        duration: 1600,
        style: { marginTop: '40vh' },
      });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <button
        className={'border-mainBlack mr-4 grow cursor-pointer rounded-[5px] border py-3 leading-[0.5] lg:leading-[1.5]'}
        onClick={() => copyToClipboard(`http://localhost:3000/user/${params}`)}
      >
        프로필 공유
      </button>
    </>
  );
}
