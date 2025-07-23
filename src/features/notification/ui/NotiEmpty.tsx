import Image from 'next/image';

export default function NotificationEmpty() {
  return (
    <div className='flex flex-1 flex-col items-center justify-center gap-2 text-gray-400'>
      <Image src='/x_emput.png' alt='x_emput' width={60} height={60} className='mb-[25px]' />
      <div className='text-gray4 text-[24px] font-bold'>아직 알림이 오지 않았습니다</div>
    </div>
  );
}
