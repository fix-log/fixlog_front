'use client';

import ToggleSwitch from '@/shared/ui/ToggleSwitch';
import { X } from 'lucide-react';
import Image from 'next/image';

interface ChatDrawerProps {
  open: boolean;
  onClose: () => void;
  children?: React.ReactNode; // 필요하면 내용 커스텀 가능
}

export default function ChatDrawer({ open, onClose, children }: ChatDrawerProps) {
  return (
    <>
      {/* 오버레이: 열릴 때만 보임 */}
      <div
        className={`fixed inset-0 z-40 bg-black/20 transition-opacity duration-300 ${open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'} `}
        onClick={onClose}
        aria-hidden='true'
      />
      <div
        className={`fixed top-0 right-0 z-50 h-full w-[320px] max-w-full bg-white shadow-lg transition-transform duration-300 ease-in-out ${open ? 'translate-x-0' : 'translate-x-full'} flex flex-col`}
        role='dialog'
        aria-modal='true'
      >
        <button
          onClick={onClose}
          className='text-gray4 absolute top-4 right-4 text-2xl hover:text-gray-700'
          aria-label='닫기'
        >
          <X size={24} />
        </button>

        <div className='flex-1 overflow-y-auto'>
          {children ? (
            children
          ) : (
            <>
              <div className='border-gray5 mt-[100px] flex flex-col items-center gap-2 border-b-2 pb-[50px]'>
                <Image
                  src={'/profile1.png'}
                  alt={'다고운'}
                  width={100}
                  height={100}
                  className='rounded-full object-cover'
                />
                <span className='pt-[10px] text-[22px] font-extrabold'>다고운</span>
                <button className='mt-2 rounded-full bg-gray-100 px-4 py-1 text-[14px]'>
                  프로필 보기
                </button>
              </div>
              <div className='border-gray5 mt-6 flex justify-between border-b-2 pr-[20px] pb-[20px] pl-[28px]'>
                <p className='text-[16px] font-extrabold'>픽레드 알림</p>
                <ToggleSwitch />
              </div>
              <div className='mt-6 flex justify-start pr-[20px] pb-[20px] pl-[28px]'>
                <span className='text-[16px] font-semibold'>참여자</span>
                {/* ...추가 내용 */}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
