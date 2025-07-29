'use client';

import { useState, useRef, useEffect } from 'react';
import { ImagePlus } from 'lucide-react';
import TiptapEditor from './TiptapEditor';
import { JSONContent } from '@tiptap/react';

interface Props {
  setIsOpen: (open: boolean) => void;
  onSubmit: (json: JSONContent) => void; // HTML → JSONContent로 수정
}

export default function CreatePostModal({ setIsOpen, onSubmit }: Props) {
  const [content, setContent] = useState<JSONContent | null>({
    type: 'doc',
    content: [],
  });

  const modalRef = useRef<HTMLDivElement>(null);

  const handlePost = () => {
    if (!content || !content.content?.length) return;

    //  JSONContent 그대로 전달하게 수정했어요
    onSubmit(content);
    setIsOpen(false);
    setContent({ type: 'doc', content: [] });
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
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/20'>
      <div
        ref={modalRef}
        className='relative w-[600px] overflow-hidden rounded-xl bg-white shadow-md'
      >
        {/* 상단 헤더 */}
        <div className='flex items-center justify-between border-b border-gray-200 px-4 py-3'>
          <button
            onClick={() => setIsOpen(false)}
            className='text-sm font-semibold text-gray-500 hover:text-[var(--color-mainRed)]'
          >
            취소
          </button>
          <span className='text-sm font-semibold'>새로운 픽레드</span>
          <div className='w-10' /> {/* 게시 버튼 자리 확보용 */}
        </div>

        {/* 본문 */}
        <div className='space-y-4 px-4 py-5 pb-20'>
          <div className='flex items-center gap-3'>
            <div className='h-10 w-10 rounded-full bg-[var(--color-gray5)]' />
            <p className='font-semibold text-[var(--color-mainBlack)]'>슈가수가</p>
            <button className='ml-auto text-gray-400 hover:text-gray-600'>
              <ImagePlus className='h-5 w-5' />
            </button>
          </div>

          <div>
            {/* 여기도 공통으로 사용하는걸로 수정했어요 잘 되는지 확인해주세요 ㅠ.ㅠ */}
            <TiptapEditor
              content={content}
              setContent={setContent}
              placeholder='프로젝트 설명을 입력해주세요.'
              minHeight='min-h-[120px]'
              className=''
            />
          </div>
        </div>

        {/* 게시 버튼 */}
        <div className='absolute right-4 bottom-4'>
          <button
            onClick={handlePost}
            className={`rounded px-4 py-2 text-sm font-semibold ${
              content?.content?.length
                ? 'bg-[var(--color-mainRed)] text-white'
                : 'cursor-not-allowed bg-gray-200 text-gray-400'
            }`}
          >
            게시
          </button>
        </div>
      </div>
    </div>
  );
}
