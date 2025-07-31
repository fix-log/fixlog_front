'use client';

import { useState } from 'react';
import { X } from 'lucide-react';

interface InviteMember {
  id: number;
  email: string;
  profileImage?: string;
}

export default function MemberInviteModal({ onClose }: { onClose: () => void }) {
  const [inputEmail, setInputEmail] = useState('');
  const [inviteList, setInviteList] = useState<InviteMember[]>([]);

  const handleAddEmail = () => {
    if (!inputEmail.trim()) return;
    setInviteList((prev) => [
      ...prev,
      {
        id: Date.now(),
        email: inputEmail.trim(),
        profileImage: '/avatar2', // 나중에 백에서 받아오도록
      },
    ]);
    setInputEmail('');
  };

  const handleRemove = (id: number) => {
    setInviteList((prev) => prev.filter((m) => m.id !== id));
  };

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/40'>
      <div className='relative flex w-full max-w-[500px] flex-col rounded-lg bg-white px-[40px] py-[50px]'>
        {/* 닫기 버튼 */}
        <button onClick={onClose} className='absolute top-6 right-6'>
          <X className='text-gray3 size-5' />
        </button>

        {/* 타이틀 */}
        <h2 className='mb-[40px] text-center text-[24px] font-bold'>멤버 추가하기</h2>

        {/* 이메일 입력 영역 */}
        <div className='mb-6 flex gap-2'>
          <input
            type='email'
            value={inputEmail}
            onChange={(e) => setInputEmail(e.target.value)}
            placeholder='이메일을 입력해주세요'
            className='border-gray4 focus:border-mainRed flex-1 rounded-md border px-4 py-3 text-sm focus:outline-none'
          />
          <button
            onClick={handleAddEmail}
            className='bg-mainBlack text-mainWhite rounded-md px-4 py-2 text-sm'
          >
            추가
          </button>
        </div>

        {/* 추가된 유저 리스트 */}
        <div className='max-h-[300px] space-y-3 overflow-y-auto'>
          {inviteList.map((member) => (
            <div
              key={member.id}
              className='border-gray4 flex items-center justify-between rounded-md border px-4 py-2'
            >
              <div className='flex items-center gap-3'>
                <img
                  src={member.profileImage}
                  alt={member.email}
                  className='size-8 rounded-full object-cover'
                />
                <span className='text-mainBlack text-sm'>{member.email}</span>
              </div>
              <button
                onClick={() => handleRemove(member.id)}
                className='border-gray4 text-gray2 rounded-md border px-3 py-1 text-sm'
              >
                삭제
              </button>
            </div>
          ))}
        </div>

        {/* 하단 고정 버튼 */}
        <div className='mt-8 flex w-full justify-center'>
          <button className='bg-mainRed w-full rounded-md py-3 text-sm font-semibold text-white'>
            추가하기
          </button>
        </div>
      </div>
    </div>
  );
}
