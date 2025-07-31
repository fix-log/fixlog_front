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
    const [isConfirmModalOn, setIsConfirmModalOn] = useState(false);
    const modalRef = useRef<HTMLDivElement>(null);
  
    const handlePost = () => {
      if (!content || !content.content?.length) return;
      onSubmit(content);
      setIsOpen(false);
      setContent({ type: 'doc', content: [] });
    };
  
    const handleCancelClick = () => {
      if (content?.content?.length) {
        setIsConfirmModalOn(true);
      } else {
        setIsOpen(false);
      }
    };
  
    // 외부 클릭 무시 (닫기 방지용)
    useEffect(() => {
      const preventClose = (e: MouseEvent) => {
        if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
          // do nothing
        }
      };
      document.addEventListener('mousedown', preventClose);
      return () => document.removeEventListener('mousedown', preventClose);
    }, []);
  
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20">
        <div
          ref={modalRef}
          className="relative w-[600px] overflow-hidden rounded-xl bg-white shadow-md"
        >
          {/* 상단 헤더 */}
          <div className="flex items-center justify-between border-b border-gray4 px-4 py-3">
            <button
              onClick={handleCancelClick}
              className="text-sm font-semibold text-gray3 hover:text-mainRed"
            >
              취소
            </button>
            <span className="text-sm font-semibold text-mainBlack">새로운 픽레드</span>
            <div className="w-10" />
          </div>
  
          {/* 본문 영역 */}
          <div className="space-y-4 px-4 py-5 pb-20">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-gray5" />
              <p className="font-semibold text-mainBlack">슈가수가</p>
              <button className="ml-auto text-gray3 hover:text-gray1">
                <ImagePlus className="h-5 w-5" />
              </button>
            </div>
  
            <TiptapEditor
              content={content}
              setContent={setContent}
              placeholder="오늘은 무엇을 기록해볼까요?"
              minHeight="min-h-[120px]"
              className=""
            />
          </div>
  
          {/* 게시 버튼 */}
          <div className="absolute right-4 bottom-4">
            <button
              onClick={handlePost}
              className={`rounded px-4 py-2 text-sm font-semibold ${
                content?.content?.length
                  ? 'bg-mainRed text-white'
                  : 'cursor-not-allowed bg-gray4 text-gray3'
              }`}
            >
              게시
            </button>
          </div>
        </div>
  
        {/* 취소 확인 모달 */}
        {isConfirmModalOn && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
            <div className="w-[300px] rounded-lg bg-white p-6 text-center shadow">
              <p className="mb-4 text-sm text-mainBlack">
                작성 중인 내용이 사라집니다. 정말 닫을까요?
              </p>
              <div className="flex justify-center gap-3">
                <button
                  className="rounded bg-gray4 px-4 py-2 text-sm text-gray3"
                  onClick={() => setIsConfirmModalOn(false)}
                >
                  계속 작성
                </button>
                <button
                  className="rounded bg-mainRed px-4 py-2 text-sm text-white"
                  onClick={() => {
                    setIsOpen(false);
                    setIsConfirmModalOn(false);
                    setContent({ type: 'doc', content: [] });
                  }}
                >
                  닫기
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }