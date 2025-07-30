'use client';

import { useState, useEffect } from 'react';
import { Heart, MessageCircle, Mail, MoreHorizontal } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';
import { ko } from 'date-fns/locale';

import CreatePostModal from '@/features/fixred/create/CreatePostModal';
import FloatingWriteButton from '@/features/fixred/create/FloatingWriteButton';
import StarterKit from '@tiptap/starter-kit';
import { generateHTML, JSONContent } from '@tiptap/core';

interface Post {
  id: number;
  author: string;
  content: string;
  createdAt: Date;
  likes: number;
  comments: number;
  shares: number;
}

export default function PickreadMainPage() {
  const [activeTab, setActiveTab] = useState<'all' | 'following'>('all');
  const [openDropdownIndex, setOpenDropdownIndex] = useState<number | null>(null);
  const [isCreateModalOn, setIsCreateModalOn] = useState(false);
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const handleClickOutside = () => setOpenDropdownIndex(null);
    window.addEventListener('click', handleClickOutside);
    return () => window.removeEventListener('click', handleClickOutside);
  }, []);

  //수정님 여기.. JSON으로 저장하고, 렌더할 때만 HTML 변환하는 방식으로 수정했어요.. 맞는지는 모르겠어요..
  const handleSubmitPost = (json: JSONContent) => {
    const html = generateHTML(json, [StarterKit]);

    const newPost: Post = {
      id: Date.now(),
      author: '슈가수가',
      content: html,
      createdAt: new Date(),
      likes: 0,
      comments: 0,
      shares: 0,
    };

    setPosts((prev) => [newPost, ...prev]);
  };
  const handleEditPost = (postId: number) => {
    console.log(`게시물 ${postId} 수정`);
    // TODO: 나중에...
  };

  const handleDeletePost = (postId: number) => {
    console.log(`게시물 ${postId} 삭제`);
    setPosts((prev) => prev.filter((post) => post.id !== postId));
  };

  return (
    <main className='relative flex min-h-screen w-full justify-center bg-white px-4 py-8'>
      <section className='w-full max-w-[800px] space-y-6'>
        {/* 탭 필터 */}
        <div className='border-gray4 inline-flex w-fit rounded-md border bg-white p-1'>
          {(['all', 'following'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-1.5 text-sm font-bold transition-all ${
                activeTab === tab ? 'bg-mainRed rounded-md text-white' : 'text-gray3'
              }`}
            >
              {tab === 'all' ? '전체' : '팔로잉'}
            </button>
          ))}
        </div>

        {/* 입력창 */}
        <div
          className='border-gray4 flex cursor-pointer items-center gap-4 rounded-md border bg-white p-5'
          onClick={() => setIsCreateModalOn(true)}
        >
          <div className='bg-gray5 h-10 w-10 rounded-full' />
          <span className='text-gray3'>오늘은 무엇을 기록해볼까요?</span>
        </div>

        {/* 게시물 카드 */}
        {posts.map((post, index) => (
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
              <div className="relative">
                <button
                  className="text-gray3 hover:text-gray1"
                  onClick={(e) => {
                    e.stopPropagation();
                    setOpenDropdownIndex(openDropdownIndex === index ? null : index);
                  }}
                >
                  <MoreHorizontal className="h-5 w-5" />
                </button>

                {openDropdownIndex === index && (
                  <div
                    className="border-gray4 absolute right-0 z-10 mt-2 w-28 rounded border bg-white shadow"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <button
                      onClick={() => {
                        handleEditPost(post.id);
                        setOpenDropdownIndex(null);
                      }}
                      className="hover:bg-gray6 block w-full px-4 py-2 text-sm text-gray1"
                    >
                      수정하기
                    </button>
                    <button
                      onClick={() => {
                        handleDeletePost(post.id);
                        setOpenDropdownIndex(null);
                      }}
                      className="text-red-500 hover:bg-gray6 block w-full px-4 py-2 text-sm"
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
        ))}
      </section>

      {/* 고정된 작성 버튼 */}
      <FloatingWriteButton onClick={() => setIsCreateModalOn(true)} />

      {/* 작성 모달 */}
      {isCreateModalOn && (
        <CreatePostModal setIsOpen={setIsCreateModalOn} onSubmit={handleSubmitPost} />
      )}

    </main>
  );
}
