'use client';

import FormDropdownButton from '@/shared/form/ui/FormDropdownButton';
import { useState } from 'react';

const DATA = [
  { label: '개발 언어', id: 'devLanguage', placeholder: '개발 언어를 선택해주세요' },
  { label: '기술 스택 & 툴', id: 'stackAndTool', placeholder: '기술 스택 & 툴을 선택해주세요' },
  {
    label: '디자인 & 협업 툴',
    id: 'designAndCollab',
    placeholder: '디자인 & 협업 툴을 선택해주세요',
  },
] as const;

export default function FormFields() {
  const [isDropdownOpen, setIsDropdownOpen] = useState<string | undefined>(undefined);
  // 드롭다운 오픈 여부 + 오픈된 드롭다운이 무엇인지 판단하기 위함이기도 함

  return (
    <>
      {DATA.map((item) => (
        <FormDropdownButton
          type='multi'
          key={item.id}
          id={item.id}
          label={item.label}
          placeholder={item.placeholder}
          open={isDropdownOpen}
          setOpen={setIsDropdownOpen}
        />
      ))}
    </>
  );
}
