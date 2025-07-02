'use client';

import FormDropdownButton from '@/shared/form/ui/FormDropdownButton';
import FormHeader from '@/shared/form/ui/FormHeader';
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
    router.push('/login/signup/step4');
  }

  return (
    <div className='flex w-full !max-w-[500px] flex-col items-center'>
      <FormHeader title='기술 역량' />
      <form className='w-full' onSubmit={form.handleSubmit(handleClick)}>
        <FormDropdownButton
          label='개발 언어'
          placeholder='개발 언어를 선택해주세요'
          data='devLanguage'
          open={isDropdownOpen}
          setOpen={setIsDropdownOpen}
        />
        <FormDropdownButton
          label='기술 스택 & 툴'
          placeholder='기술 스택 & 툴을 선택해주세요'
          data='stackAndTool'
          open={isDropdownOpen}
          setOpen={setIsDropdownOpen}
        />
        <FormDropdownButton
          label='디자인 & 협업 툴'
          placeholder='디자인 & 협업 툴을 선택해주세요'
          data='designAndCollab'
          open={isDropdownOpen}
          setOpen={setIsDropdownOpen}
        />
        <FormSubmitButton text='다음 (3/4)' isSubmitting={form.formState.isSubmitting} />
      </form>
    </div>
  );
}
