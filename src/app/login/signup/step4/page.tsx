'use client';

import FormDropdownButton from '@/shared/form/ui/FormDropdownButton';
import FormFile from '@/shared/form/ui/FormFile';
import FormHeader from '@/shared/form/ui/FormHeader';
import FormInputString from '@/shared/form/ui/FormInputString';
import FormSubmitButton from '@/shared/form/ui/FormSubmitButton';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

export default function step3() {
  const router = useRouter();
  const form = useForm();
  const [isDropdownOpen, setIsDropdownOpen] = useState<string | undefined>(undefined);
  // 드롭다운 오픈 여부 + 오픈된 드롭다운이 무엇인지 판단하기 위함이기도 함

  function handleClick() {
    router.push('/login');
  }

  return (
    <div className='flex w-full !max-w-[500px] flex-col items-center'>
      <FormHeader title='기술 역량' />
      <form className='w-full' onSubmit={form.handleSubmit(handleClick)}>
        <FormDropdownButton
          label='관심 개발 분야'
          placeholder='관심 개발 분야를 선택해주세요'
          data='devLanguage'
          open={isDropdownOpen}
          setOpen={setIsDropdownOpen}
        />
        <FormDropdownButton
          label='관심 기술 & 트렌드'
          placeholder='관심 기술 & 트렌드를 선택해주세요'
          data='stackAndTool'
          open={isDropdownOpen}
          setOpen={setIsDropdownOpen}
        />
        <FormDropdownButton
          label='커리어 & 성장'
          placeholder='커리어 & 성장을 선택해주세요'
          data='designAndCollab'
          open={isDropdownOpen}
          setOpen={setIsDropdownOpen}
        />
        <FormFile label='포트폴리오 파일' />
        <FormInputString
          label='참고 링크'
          type='url'
          placeholder='URL을 입력해주세요'
          name='url'
          form={form}
        />
        <FormSubmitButton text='회원가입하기' isSubmitting={form.formState.isSubmitting} />
      </form>
    </div>
  );
}
