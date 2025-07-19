'use client';

import { Dispatch, SetStateAction, useState } from 'react';
import BaseModal from '@/shared/ui/Modal';

interface Props {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  onComplete: () => void;
}

const reasons = [
  '욕설/비하/혐오 표현',
  '개인정보가 노출',
  '음란물 또는 선정적인 내용',
  '불법 정보 또는 범죄와 관련된 내용',
  '기타',
];

export default function ReportModal({ setIsOpen, onComplete }: Props) {
  const [selected, setSelected] = useState('');

  return (
    <BaseModal setIsOpen={setIsOpen}>
      <div className="w-[380px] px-6 py-8 text-center">
        <h2 className="text-[30px] font-bold text-[var(--color-mainBlack)] mb-6">
          <p>해당 픽레드를</p> 신고하시겠습니까?
        </h2>

        <div className="space-y-5 text-left mb-8">
          {reasons.map((reason) => (
            <label
              key={reason}
              className="flex items-center gap-3 text-[15px] text-[var(--color-gray3)] pl-10"
            >
              <input
                type="radio"
                name="report"
                value={reason}
                checked={selected === reason}
                onChange={() => setSelected(reason)}
                className="accent-[var(--color-mainRed)]"
              />
              {reason}
            </label>
          ))}
        </div>

        <div className="flex gap-4 w-full">
          <button
            className="flex-1 h-[44px] rounded-md bg-black text-white font-semibold"
            onClick={() => setIsOpen(false)}
          >
            로그인 하러 하기
          </button>
          <button
            className="flex-1 h-[44px] rounded-md bg-[var(--color-mainRed)] text-white font-semibold"
            onClick={() => {
              setIsOpen(false);
              onComplete();
            }}
          >
            비밀번호 찾기
          </button>
        </div>
      </div>
    </BaseModal>
  );
}
