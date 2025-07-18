import FormDropdownButton from '@/shared/form/ui/FormDropdownButton';
import FormFile from '@/shared/form/ui/FormFile';
import FormInputString from '@/shared/form/ui/FormInputString';
import { useState } from 'react';

const DATA = [
  { label: '관심 개발 분야', id: 'devInterestField', placeholder: '관심 개발 분야를 선택해주세요' },
  {
    label: '관심 기술 & 트렌드',
    id: 'techTrendsInterest',
    placeholder: '관심 기술 & 트렌드를 선택해주세요',
  },
  { label: '커리어 & 성장', id: 'careerGrowth', placeholder: '커리어 & 성장를 선택해주세요' },
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
      <FormFile label='포트폴리오 파일' id='portfolio' />
      <FormInputString label='참고 링크' type='url' placeholder='URL을 입력해주세요' id='url' />
    </>
  );
}
