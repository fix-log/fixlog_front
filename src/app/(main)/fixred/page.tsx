'use client';

import { useState, useEffect } from 'react';
import { Heart, MessageCircle, Mail, MoreHorizontal } from 'lucide-react';

import ReportModal from '@/features/fixred/report/ReportModal';
import BlockModal from '@/features/fixred/block/BlockModal';

export default function PickreadMainPage() {
  const [activeTab, setActiveTab] = useState<'all' | 'following'>('all');
  const [openDropdownIndex, setOpenDropdownIndex] = useState<number | null>(null);
  const [showReportModal, setShowReportModal] = useState(false);
  const [showBlockModal, setShowBlockModal] = useState(false);

  useEffect(() => {
    const handleClickOutside = () => setOpenDropdownIndex(null);
    window.addEventListener('click', handleClickOutside);
    return () => window.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <main className="flex justify-center bg-white py-8 min-h-screen">
      <section className="w-full max-w-[1440px] px-6 space-y-6">
        {/* 탭 필터 */}
        <div className="inline-flex bg-white border border-[var(--color-gray4)] p-1 rounded-md w-fit">
          {(['all', 'following'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-1.5 text-sm font-bold transition-all ${
                activeTab === tab
                  ? 'bg-[var(--color-mainRed)] text-white rounded-md'
                  : 'text-[var(--color-gray3)]'
              }`}
            >
              {tab === 'all' ? '전체' : '팔로잉'}
            </button>
          ))}
        </div>

        {/* 입력창 */}
        <div className="bg-white border border-[var(--color-gray4)] p-5 flex items-center gap-4 rounded-md">
          <div className="w-10 h-10 bg-[var(--color-gray5)] rounded-full" />
          <span className="text-[var(--color-gray3)]">오늘은 무엇을 기록해볼까요?</span>
        </div>

        {/* 게시물 카드 */}
        {[1, 2, 3].map((item, index) => (
          <div
            key={item}
            className="bg-white border border-[var(--color-gray4)] p-5 space-y-3 rounded-md relative"
          >
            {/* 작성자 */}
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[var(--color-gray5)] rounded-full" />
                <div>
                  <p className="font-semibold text-[var(--color-mainBlack)]">슈가수가</p>
                  <p className="text-xs text-[var(--color-gray3)]">3시간 전</p>
                </div>
              </div>

              {/* 드롭다운 버튼 */}
              <div className="relative">
                <button
                  className="text-[var(--color-gray3)] hover:text-[var(--color-gray1)]"
                  onClick={(e) => {
                    e.stopPropagation(); // 드롭다운 안 닫히게
                    setOpenDropdownIndex(openDropdownIndex === index ? null : index);
                  }}
                >
                  <MoreHorizontal className="w-5 h-5" />
                </button>

                {openDropdownIndex === index && (
                  <div
                    className="absolute right-0 mt-2 w-28 bg-white border border-gray-300 rounded shadow z-10"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <button
                      onClick={() => {
                        setShowReportModal(true);
                        setOpenDropdownIndex(null);
                      }}
                      className="block w-full px-4 py-2 text-sm text-red-500 hover:bg-gray-50"
                    >
                      신고하기
                    </button>
                    <button
                      onClick={() => {
                        setShowBlockModal(true);
                        setOpenDropdownIndex(null);
                      }}
                      className="block w-full px-4 py-2 text-sm text-gray-600 hover:bg-gray-50"
                    >
                      차단하기
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* 본문 */}
            <p className="text-[var(--color-mainBlack)] text-sm leading-relaxed">
              핀터레스트에서 봤는데, 이런식의 뜨개질은 어떻게 하는 거야? 너무 예뻐서 장식용으로 만들고 싶은데 <br />
              이런 뜨개질 처음봐서 너무 신기해! 배워보고 싶다🥹
            </p>

            {/* 이미지 */}
            <div className="grid grid-cols-3 gap-2 overflow-hidden">
              <div className="h-48 bg-[var(--color-gray5)]" />
              <div className="h-48 bg-[var(--color-gray5)]" />
              <div className="h-48 bg-[var(--color-gray5)]" />
            </div>

            {/* 아이콘 */}
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

      {/* 모달 */}
      {showReportModal && (
        <ReportModal
          setIsOpen={setShowReportModal}
          onComplete={() => alert(' 신고 완료')}
        />
      )}
      {showBlockModal && (
        <BlockModal
          setIsOpen={setShowBlockModal}
          onComplete={() => alert('차단 완료')}
        />
      )}
    </main>
  );
}
