'use client';

import { FormValues, schema } from '@/features/profile/model/AccountEditSchema';
import FormHeader from '@/shared/form/ui/FormHeader';
import FormInputString from '@/shared/form/ui/FormInputString';
import FormSubmitButton from '@/shared/form/ui/FormSubmitButton';
import BackIconButton from '@/shared/ui/BackIconButton';
import { zodResolver } from '@hookform/resolvers/zod';
import { redirect } from 'next/navigation';
import { FormProvider, useForm } from 'react-hook-form';

export default function EditAccount() {
  const userId = 99; // 임시
  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  function handleSubmit(data: FormValues) {
    // 계정정보수정 api 연결
    redirect(`/user/${userId}`);
  }

  return (
    <>
      <BackIconButton />
      <FormProvider {...form}>
        <div className='flex w-full max-w-[500px] flex-col items-center'>
          <FormHeader title='계정 정보 수정' />
          <form className='w-full' onSubmit={form.handleSubmit(handleSubmit)}>
            <FormInputString
              id='email'
              label='이메일'
              type='text'
              placeholder='유저 이메일'
              disabled={true}
            />
            <FormInputString
              id='nickname'
              label='닉네임'
              type='text'
              placeholder='유저 닉네임'
              disabled={true}
            />
            <FormInputString
              id='password'
              label='비밀번호'
              type='password'
              placeholder='현재 비밀번호를 입력해주세요'
            />
            <FormInputString
              id='confirmPassword'
              label='새 비밀번호'
              type='password'
              placeholder='새로운 비밀번호를 입력해주세요'
            />
            <FormSubmitButton
              text='계정 정보 수정하기'
              isSubmitting={form.formState.isSubmitting}
            />
          </form>
        </div>
      </FormProvider>
    </>
  );
}
