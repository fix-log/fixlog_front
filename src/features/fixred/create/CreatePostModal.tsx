'use client';

import { useState, useRef, useEffect } from 'react';
import { ImagePlus } from 'lucide-react';
import TiptapEditor from './TiptapEditor';

interface Props {
  setIsOpen: (open: boolean) => void;
  onSubmit: (html: string) => void;
}

export default function CreatePostModal({ setIsOpen, onSubmit }: Props) {
  const [content, setContent] = useState('');
  const modalRef = useRef<HTMLDivElement>(null);

  const handlePost = () => {
    if (!content.trim()) return;
    onSubmit(content);
    setIsOpen(false);
    setContent('');
  };

  // 외부 클릭 시 모달 닫기
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [setIsOpen]);

  return (
    <div className="fixed inset-0 z-50 bg-black/20 flex items-center justify-center">
      <div
        ref={modalRef}
        className="relative w-[600px] bg-white rounded-xl overflow-hidden shadow-md"
      >
        {/* 상단 헤더 */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200">
          <button
            onClick={() => setIsOpen(false)}
            className="text-sm text-gray-500 font-semibold hover:text-[var(--color-mainRed)]"
          >
            취소
          </button>
          <span className="text-sm font-semibold">새로운 픽레드</span>
          <div className="w-10" /> {/* 게시 버튼 자리 확보용 */}
        </div>

        {/* 본문 */}
        <div className="px-4 py-5 space-y-4 pb-20">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[var(--color-gray5)] rounded-full" />
            <p className="font-semibold text-[var(--color-mainBlack)]">슈가수가</p>
            <button className="ml-auto text-gray-400 hover:text-gray-600">
              <ImagePlus className="w-5 h-5" />
            </button>
          </div>

          <div>
            <TiptapEditor content={content} setContent={setContent} />
          </div>
        </div>

        {/* 게시 버튼 */}
        <div className="absolute bottom-4 right-4">
          <button
            onClick={handlePost}
            className={`px-4 py-2 text-sm rounded font-semibold ${
              content.trim()
                ? 'bg-[var(--color-mainRed)] text-white'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
          >
            게시
          </button>
        </div>
      </div>
    </div>
  );
}
