// components/chat/ChatHeader.tsx
import { ArrowLeft } from 'lucide-react'; // 아이콘은 npm에서 설치 필요

export default function ChatHeader() {
  return (
    <header className='relative flex items-center gap-3 border-b px-6 py-4'>
      {/* ← 버튼 (모바일이면 뒤로가기) */}
      <button className='absolute left-4 p-2' aria-label='뒤로가기'>
        <ArrowLeft size={22} />
      </button>
      {/* 프로필 */}
      <img
        src='/images/profile1.jpg'
        alt='다고운'
        className='mx-auto h-12 w-12 rounded-full object-cover'
      />
      {/* 이름, 시간 */}
      <div className='flex flex-1 flex-col items-center justify-center'>
        <span className='text-lg font-bold'>다고운</span>
        <span className='text-xs text-gray-400'>2시간 전</span>
      </div>
    </header>
  );
}
