'use client';

import { X } from 'lucide-react';

interface Props {
  email: string;
  profileImage?: string;
  initial?: {
    position: string[];
    role: string;
    permission: string;
  };
  onSave: (data: { position: string[]; role: string; permission: string }) => void;
  onClose: () => void;
}

export default function MemberRoleModal({ email, profileImage, initial, onSave, onClose }: Props) {
  return (
    <div className='fixed inset-0 z-60 flex items-center justify-center bg-black/40'>
      <div className='relative flex w-full max-w-[500px] flex-col rounded-lg bg-white px-[40px] py-[30px]'>
        {/* 닫기 버튼 */}
        <button onClick={onClose} className='absolute top-6 right-6'>
          <X className='text-gray3 size-5' />
        </button>

        {/* 타이틀 */}
        <h2 className='mb-6 text-center text-[20px] font-bold'>역할 및 권한 설정</h2>

        {/* 유저 정보 */}
        <div className='mb-6 flex items-center gap-3'>
          <img
            src={profileImage || '/avatar2'}
            alt={email}
            className='size-10 rounded-full object-cover'
          />
          <span className='text-mainBlack text-sm'>{email}</span>
        </div>
      </div>
    </div>
  );
}
