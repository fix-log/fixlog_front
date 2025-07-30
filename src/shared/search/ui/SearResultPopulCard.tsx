'use client';

import { dummyFeedPosts } from '@/entities/search/dummyFeedPosts';
import { Heart, MessageCircle, Mail, MoreHorizontal } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';
import { ko } from 'date-fns/locale';
import Link from 'next/link';

export default function SearResultPopulCard() {
  return (
    <div className='mx-auto flex w-[800px] flex-col gap-[25px] py-[50px]'>
      {dummyFeedPosts.map((ex) => (
        <div
          key={ex.id}
          className='border-gray4 relative w-full space-y-3 rounded-md border bg-white p-5'
        >
          {/* 작성자 */}
          <div className='flex items-start justify-between'>
            <div className='flex items-center gap-3'>
              <div className='bg-gray5 h-10 w-10 rounded-full' />
              <div>
                <p className='text-mainBlack font-semibold'>{ex.author}</p>
                <p className='text-gray3 text-xs'>
                  {formatDistanceToNow(new Date(ex.date), {
                    addSuffix: true,
                    locale: ko,
                  })}
                </p>
              </div>
            </div>
          </div>

          {/* 본문 */}
          <div
            className='text-mainBlack text-sm leading-relaxed'
            dangerouslySetInnerHTML={{ __html: ex.content }}
          />

          {/* 아이콘 */}
          <div className='text-gray2 flex items-center gap-6 text-sm'>
            <div className='flex items-center gap-1'>
              <Heart className='h-4 w-4' />
              <span>{ex.likes}</span>
            </div>
            <div className='flex items-center gap-1'>
              <MessageCircle className='h-4 w-4' />
              <span>{ex.comments}</span>
            </div>
            <Link href='/fixletter' className='flex items-center gap-1'>
              <Mail className='h-4 w-4' />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
