import React from "react";

interface OneButtonPopupProps {
  open: boolean;
  content: React.ReactNode;   // 팝업 안에 들어갈 내용
  buttonText: string;         // 버튼에 들어갈 텍스트
  onClick: () => void;        // 버튼 클릭 시 실행 함수
}

export default function OneButtonPopup({
  open,
  content,
  buttonText,
  onClick,
}: OneButtonPopupProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-white rounded-2xl p-8 min-w-[280px] max-w-[90vw]">
        <div className="mb-6">{content}</div>
        <button
          className="px-4 py-2 rounded bg-blue-600 text-white w-full"
          onClick={onClick}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
}
