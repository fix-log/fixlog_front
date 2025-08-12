import Image from 'next/image';

interface ChatEmptyProps {
  heading: string;
  subtext: string;
}

export default function ChatEmpty({ heading, subtext }: ChatEmptyProps) {
  return (
    <div className='mb-[20px] flex flex-1 flex-col items-center justify-center gap-2 text-gray-400'>
      <Image
        src='/x_emput.png'
        alt='x_emput'
        width={80}
        height={80}
        className='mt-[60px] mb-[25px]'
      />
      <div className='text-gray4 text-[24px] font-bold'>{heading}</div>
      <div className='text-gray4 text-[18px]'>{subtext}</div>
    </div>
  );
}
