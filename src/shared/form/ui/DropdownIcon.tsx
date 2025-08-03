'use client';

import { ChevronDown } from 'lucide-react';
import { ChevronUp } from 'lucide-react';
import { Plus } from 'lucide-react';

interface DropdownIcon {
  type: 'single' | 'multi';
  form: string | undefined;
  target: string;
}

/**
 * @param type 드롭다운 타입
 * @param form 드롭다운 온오프상태 겸 열린 드롭다운 추적 (state)
 * @param target 추적할 드롭다운 명
 */
export default function DropdownIcon({ type, form, target }: DropdownIcon) {
  const toggleIcons = {
    single: {
      open: <ChevronDown />,
      close: <ChevronUp />,
    },
    multi: {
      open: <Plus />,
      close: <ChevronDown />,
    },
  };

  return (
    <div className='text-gray1 pr-[15px]'>
      {form !== target ? toggleIcons[type].open : toggleIcons[type].close}
    </div>
  );
}

// 드롭다운 버튼 오른쪽에 위치한 (열림), (닫힘) 아이콘 표시