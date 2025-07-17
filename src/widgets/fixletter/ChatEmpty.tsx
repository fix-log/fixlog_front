import Image from 'next/image';

export default function ChatEmpty() {
  return (
    <div className='flex flex-1 flex-col items-center justify-center gap-2 text-gray-400'>
      <Image
        src='/x_emput.png'
        alt='x_emput'
        width={80}
        height={80}
        className='mt-[150px] mb-[25px]'
      />
      <div className='text-gray4 text-[24px] font-bold'>아직 생성된 픽레터가 없습니다</div>
      <div className='text-gray4 text-[18px]'>다른 사용자들에게 메시지를 보내보세요</div>
    </div>
  );
}
