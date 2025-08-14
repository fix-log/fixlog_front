'use client';

import { formatDistanceToNow } from 'date-fns';
import { ko } from 'date-fns/locale';
import { Heart, Mail, MessageCircle, MoreHorizontal } from 'lucide-react';
import { useState } from 'react';

// 임시 픽레드 컴포넌트입니다
// 나중에 픽레드 따로 컴포넌트로 분리되면 없어질 파일입니다요
// 지금은 슬쩍 훔쳐왔어요

interface post {
  id: number;
  author: string;
  content: string;
  createdAt: Date;
  likes: number;
  comments: number;
  shares: number;
}
interface PosrCardProps {
  respones: post[];
}

export default function PostCard({ respones }: PosrCardProps) {
  const [openDropdownIndex, setOpenDropdownIndex] = useState<number | null>(null);
  const [posts, setPosts] = useState<post[]>(respones);

  const handleEditPost = (postId: number) => {
    console.log(`게시물 ${postId} 수정`);
    // TODO: 나중에...
  };

  const handleDeletePost = (postId: number) => {
    console.log(`게시물 ${postId} 삭제`);
    setPosts((prev) => prev.filter((post) => post.id !== postId));
  };

  return posts.map((post, index) => (
    <div
      key={post.id}
      className='border-gray4 relative w-full space-y-3 rounded-md border bg-white p-5'
    >
      {/* 작성자 */}
      <div className='flex items-start justify-between'>
        <div className='flex items-center gap-3'>
          <div className='bg-gray5 h-10 w-10 rounded-full' />
          <div>
            <p className='text-mainBlack font-semibold'>{post.author}</p>
            <p className='text-gray3 text-xs'>
              {formatDistanceToNow(new Date(post.createdAt), {
                addSuffix: true,
                locale: ko,
              })}
            </p>
          </div>
        </div>

        {/* 드롭다운 버튼 -일단 모든 게시물에 적용*/}
        <div className='relative'>
          <button
            className='text-gray3 hover:text-gray1'
            onClick={(e) => {
              e.stopPropagation();
              setOpenDropdownIndex(openDropdownIndex === index ? null : index);
            }}
          >
            <MoreHorizontal className='h-5 w-5' />
          </button>

          {openDropdownIndex === index && (
            <div
              className='border-gray4 absolute right-0 z-10 mt-2 w-28 rounded border bg-white shadow'
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => {
                  handleEditPost(post.id);
                  setOpenDropdownIndex(null);
                }}
                className='hover:bg-gray6 text-gray1 block w-full px-4 py-2 text-sm'
              >
                수정하기
              </button>
              <button
                onClick={() => {
                  handleDeletePost(post.id);
                  setOpenDropdownIndex(null);
                }}
                className='hover:bg-gray6 block w-full px-4 py-2 text-sm text-red-500'
              >
                삭제하기
              </button>
            </div>
          )}
        </div>
      </div>

      {/* 본문 */}
      <div
        className='text-mainBlack text-sm leading-relaxed'
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      {/* 아이콘 */}
      <div className='text-gray2 flex items-center gap-6 text-sm'>
        <div className='flex items-center gap-1'>
          <Heart className='h-4 w-4' />
          <span>{post.likes}</span>
        </div>
        <div className='flex items-center gap-1'>
          <MessageCircle className='h-4 w-4' />
          <span>{post.comments}</span>
        </div>
        <div className='flex items-center gap-1'>
          <Mail className='h-4 w-4' />
          <span>{post.shares}</span>
        </div>
      </div>
    </div>
  ));
}