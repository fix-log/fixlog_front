import FormDropdownButton from '@/shared/form/ui/FormDropdownButton';
import FormInputString from '@/shared/form/ui/FormInputString';
import FormRadioSelect from '@/shared/form/ui/FormRadioSelect';
import { useState } from 'react';

export default function FormFields() {
  const [isDropdownOpen, setIsDropdownOpen] = useState<string | undefined>(undefined);
  // 드롭다운 오픈 여부 + 오픈된 드롭다운이 무엇인지 판단하기 위함이기도 함

  return (
    <>
      <FormInputString label='이름' type='text' id='name' placeholder='이름을 입력해주세요' />
      <FormInputString label='생년월일' type='text' id='birthDate' placeholder='YYYYMMDD' />
      <FormRadioSelect label='성별' id='gender' button={['남성', '여성']} />
      <FormInputString
        label='전화번호'
        type='text'
        id='phoneNumber'
        placeholder='숫자만 입력해주세요'
      />

      <FormDropdownButton
        type='multi'
        label='포지션'
        placeholder='포지션을 선택해주세요'
        id='position'
        open={isDropdownOpen}
        setOpen={setIsDropdownOpen}
      />
      <FormDropdownButton
        type='single'
        label='경력'
        placeholder='경력을 선택해주세요'
        id='career'
        open={isDropdownOpen}
        setOpen={setIsDropdownOpen}
      />
    </>
  );
}
