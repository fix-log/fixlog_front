'use client';

import { Dispatch, SetStateAction } from 'react';
import BaseModal from '@/shared/ui/Modal';

interface Props {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  onComplete: () => void;
}

export default function BlockModal({ setIsOpen, onComplete }: Props) {
  return (
    <BaseModal setIsOpen={setIsOpen}>
      <div className="w-[300px] p-6 flex flex-col items-center justify-center text-center">
        <h2 className="text-lg font-bold text-[var(--color-mainBlack)] mb-2">
          해당 유저를 차단하시겠습니까?
        </h2>
        <p className="text-sm text-[var(--color-gray3)] mb-6">
          차단하시면 해당 유저의 글을 볼 수 없습니다
        </p>

        <div className="flex gap-3 w-full">
          <button
            className="flex-1 bg-[var(--color-mainRed)] text-white rounded-md py-2 font-semibold"
            onClick={() => {
              onComplete();
              setIsOpen(false);
            }}
          >
            차단
          </button>
          <button
            className="flex-1 bg-black text-white rounded-md py-2 font-semibold"
            onClick={() => setIsOpen(false)}
          >
            취소
          </button>
        </div>
      </div>
    </BaseModal>
  );
}
