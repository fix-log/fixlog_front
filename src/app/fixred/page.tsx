'use client';

import { useState } from 'react';
import { Heart, MessageCircle, Mail, MoreHorizontal } from 'lucide-react';

export default function PickreadMainPage() {
  const [activeTab, setActiveTab] = useState<'all' | 'following'>('all');

  return (
    <main className="flex justify-center bg-white py-8 min-h-screen">
      <section className="w-full max-w-[1440px] px-6 space-y-6">

        {/* 탭 필터 */}
        <div className="inline-flex bg-white border border-[var(--color-gray4)] p-1 rounded-md w-fit">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-1.5 text-sm font-bold transition-all
              ${
                activeTab === 'all'
                  ? 'bg-[var(--color-mainRed)] text-white rounded-md'
                  : 'text-[var(--color-gray3)]'
              }
            `}
          >
            전체
          </button>
          <button
            onClick={() => setActiveTab('following')}
            className={`px-4 py-1.5 text-sm font-bold transition-all
              ${
                activeTab === 'following'
                  ? 'bg-[var(--color-mainRed)] text-white rounded-md'
                  : 'text-[var(--color-gray3)]'
              }
            `}
          >
            팔로잉
          </button>
        </div>

        {/* 입력창 */}
        <div className="bg-white border border-[var(--color-gray4)] p-5 flex items-center gap-4 rounded-md">
          <div className="w-10 h-10 bg-[var(--color-gray5)] rounded-full" />
          <span className="text-[var(--color-gray3)]">오늘은 무엇을 기록해볼까요?</span>
        </div>

        {/* 게시물 카드 */}
        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="bg-white border border-[var(--color-gray4)] p-5 space-y-3 rounded-md"
          >
            {/* 작성자 + 시간 */}
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[var(--color-gray5)] rounded-full" />
                <div>
                  <p className="font-semibold text-[var(--color-mainBlack)]">슈가수가</p>
                  <p className="text-xs text-[var(--color-gray3)]">3시간 전</p>
                </div>
              </div>

              <button className="text-[var(--color-gray3)] hover:text-[var(--color-gray1)]">
                <MoreHorizontal className="w-5 h-5" />
              </button>
            </div>

            {/* 본문 */}
            <p className="text-[var(--color-mainBlack)] text-sm leading-relaxed">
              핀터레스트에서 봤는데, 이런식의 뜨개질은 어떻게 하는 거야? 너무 예뻐서 장식용으로 만들고 싶은데 <br />
              이런 뜨개질 처음봐서 너무 신기해! 배워보고 싶다🥹
            </p>

            {/* 이미지 그리드 */}
            <div className="grid grid-cols-3 gap-2 overflow-hidden">
              <div className="h-48 bg-[var(--color-gray5)]" />
              <div className="h-48 bg-[var(--color-gray5)]" />
              <div className="h-48 bg-[var(--color-gray5)]" />
            </div>

            {/* 좋아요 / 댓글 / 쪽지 */}
            <div className="flex gap-6 text-sm text-[var(--color-gray2)] items-center">
              <div className="flex items-center gap-1">
                <Heart className="w-4 h-4" />
                <span>358</span>
              </div>
              <div className="flex items-center gap-1">
                <MessageCircle className="w-4 h-4" />
                <span>18</span>
              </div>
              <div className="flex items-center gap-1">
                <Mail className="w-4 h-4" />
                <span>18</span>
              </div>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
