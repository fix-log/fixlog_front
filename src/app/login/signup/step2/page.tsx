'use client';

import FormDropdownButton from '@/shared/form/ui/FormDropdownButton';
import FormHeader from '@/shared/form/ui/FormHeader';
import FormSubmitButton from '@/shared/form/ui/FormSubmitButton';
import FormRadioSelect from '@/shared/form/ui/FormRadioSelect';
import FormInputString from '@/shared/form/ui/FormInputString';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

export default function Signup() {
  const router = useRouter();
  const form = useForm();
  const [isDropdownOpen, setIsDropdownOpen] = useState<string | undefined>(undefined);
  // 드롭다운 오픈 여부 + 오픈된 드롭다운이 무엇인지 판단하기 위함이기도 함

  function handleClick() {
    router.push('/login/signup/step3');
  }

  return (
    <div className='flex w-full !max-w-[500px] flex-col items-center'>
      <FormHeader title='기본 정보' />
      <form className='w-full' onSubmit={form.handleSubmit(handleClick)}>
        <FormInputString
          label='이름'
          type='text'
          name='name'
          placeholder='이름을 입력해주세요'
          form={form}
        />
        <FormInputString
          label='생년월일'
          type='text'
          name='birthDate'
          placeholder='YYYYMMDD'
          form={form}
        />
        <FormRadioSelect label='성별' name='gender' button={['남성', '여성']} form={form} />
        <FormInputString
          label='전화번호'
          type='text'
          name='phoneNumber'
          placeholder='숫자만 입력해주세요'
          form={form}
        />
        <FormDropdownButton
          label='포지션'
          placeholder='포지션을 선택해주세요'
          data='position'
          open={isDropdownOpen}
          setOpen={setIsDropdownOpen}
        />
        <FormDropdownButton
          label='경력'
          placeholder='경력을 선택해주세요'
          data='career'
          open={isDropdownOpen}
          setOpen={setIsDropdownOpen}
        />
        <FormSubmitButton text='다음(2/4)' isSubmitting={form.formState.isSubmitting} />
      </form>
    </div>
  );
}
