'use client';

import { format } from 'date-fns';
import { ko } from 'date-fns/locale';
import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface Props {
  title: string;
  createdAt: string;
  status: 'recruiting' | 'closed';
}

export default function ProjectHeader({ title, createdAt, status }: Props) {
  const router = useRouter();
  const formattedDate = format(new Date(createdAt), 'yyyy.MM.dd', { locale: ko });

  const statusText = status === 'recruiting' ? '모집중' : '모집 완료';

  return (
    <header className='mb-10'>
      <button
        onClick={() => router.back()}
        className='text-gray3 mb-6 transition hover:text-gray-700'
        aria-label='뒤로가기'
      >
        <ArrowLeft className='h-6 w-6' />
      </button>
      <div className='mt-[92px] ml-[100px] mr-[142px]'>
        <p className='text-pointDarkGreen mb-2 text-sm font-semibold'>{statusText}</p>
        <h1 className='text-[42px] font-semibold'>{title}</h1>
        <p className='mt-[29px] text-[16px] text-gray-400'>{formattedDate}</p>
        <hr className='mt-6 border-t border-gray-200' />
      </div>
    </header>
  );
}
