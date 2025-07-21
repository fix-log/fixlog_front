'use client';

import { useState, useEffect } from 'react';
import { Heart, MessageCircle, Mail, MoreHorizontal } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';
import { ko } from 'date-fns/locale';

import ReportModal from '@/features/fixred/report/ReportModal';
import BlockModal from '@/features/fixred/block/BlockModal';
import CreatePostModal from '@/features/fixred/create/CreatePostModal';
import FloatingWriteButton from '@/features/fixred/create/FloatingWriteButton';

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
  const [isReportModalOn, setIsReportModalOn] = useState(false);
  const [isBlockModalOn, setIsBlockModalOn] = useState(false);
  const [isCreateModalOn, setIsCreateModalOn] = useState(false);
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const handleClickOutside = () => setOpenDropdownIndex(null);
    window.addEventListener('click', handleClickOutside);
    return () => window.removeEventListener('click', handleClickOutside);
  }, []);

  const handleSubmitPost = (html: string) => {
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

  return (
    <main className="w-full flex justify-center bg-white py-8 min-h-screen relative px-4">
      <section className="w-full max-w-[800px] space-y-6">
        {/* 탭 필터 */}
        <div className="inline-flex bg-white border border-gray4 p-1 rounded-md w-fit">
          {(['all', 'following'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-1.5 text-sm font-bold transition-all ${
                activeTab === tab
                  ? 'bg-mainRed text-white rounded-md'
                  : 'text-gray3'
              }`}
            >
              {tab === 'all' ? '전체' : '팔로잉'}
            </button>
          ))}
        </div>

        {/* 입력창 */}
        <div
          className="bg-white border border-gray4 p-5 flex items-center gap-4 rounded-md cursor-pointer"
          onClick={() => setIsCreateModalOn(true)}
        >
          <div className="w-10 h-10 bg-gray5 rounded-full" />
          <span className="text-gray3">오늘은 무엇을 기록해볼까요?</span>
        </div>

        {/* 게시물 카드 */}
        {posts.map((post, index) => (
          <div
            key={post.id}
            className="w-full bg-white border border-gray4 p-5 space-y-3 rounded-md relative"
          >
            {/* 작성자 */}
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray5 rounded-full" />
                <div>
                  <p className="font-semibold text-mainBlack">{post.author}</p>
                  <p className="text-xs text-gray3">
                    {formatDistanceToNow(new Date(post.createdAt), {
                      addSuffix: true,
                      locale: ko,
                    })}
                  </p>
                </div>
              </div>

              {/* 드롭다운 버튼 */}
              <div className="relative">
                <button
                  className="text-gray3 hover:text-gray1"
                  onClick={(e) => {
                    e.stopPropagation();
                    setOpenDropdownIndex(openDropdownIndex === index ? null : index);
                  }}
                >
                  <MoreHorizontal className="w-5 h-5" />
                </button>

                {openDropdownIndex === index && (
                  <div
                    className="absolute right-0 mt-2 w-28 bg-white border border-gray4 rounded shadow z-10"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <button
                      onClick={() => {
                        setIsReportModalOn(true);
                        setOpenDropdownIndex(null);
                      }}
                      className="block w-full px-4 py-2 text-sm text-red-500 hover:bg-gray6"
                    >
                      신고하기
                    </button>
                    <button
                      onClick={() => {
                        setIsBlockModalOn(true);
                        setOpenDropdownIndex(null);
                      }}
                      className="block w-full px-4 py-2 text-sm text-gray2 hover:bg-gray6"
                    >
                      차단하기
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* 본문 */}
            <div
              className="text-mainBlack text-sm leading-relaxed"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* 아이콘 */}
            <div className="flex gap-6 text-sm text-gray2 items-center">
              <div className="flex items-center gap-1">
                <Heart className="w-4 h-4" />
                <span>{post.likes}</span>
              </div>
              <div className="flex items-center gap-1">
                <MessageCircle className="w-4 h-4" />
                <span>{post.comments}</span>
              </div>
              <div className="flex items-center gap-1">
                <Mail className="w-4 h-4" />
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
        <CreatePostModal
          setIsOpen={setIsCreateModalOn}
          onSubmit={handleSubmitPost}
        />
      )}

      {/* 신고 모달 */}
      {isReportModalOn && (
        <ReportModal
          setIsOpen={setIsReportModalOn}
          onComplete={() => alert('신고 완료')}
        />
      )}

      {/* 차단 모달 */}
      {isBlockModalOn && (
        <BlockModal
          setIsOpen={setIsBlockModalOn}
          onComplete={() => alert('차단 완료')}
        />
      )}
    </main>
  );
}
