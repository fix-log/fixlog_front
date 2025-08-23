'use client';

import OAuthButton from '@/features/auth/login/ui/OAuthButton';
import AuthLinkButton from '@/features/auth/login/ui/AuthLinkButton';
import { useRouter } from 'next/navigation';
import FormHeader from '@/shared/form/ui/FormHeader';
import FormSubmitButton from '@/shared/form/ui/FormSubmitButton';
import FormInputString from '@/shared/form/ui/FormInputString';
import { FormProvider, useForm } from 'react-hook-form';
import { isLoginedStore } from '@/entities/auth/IsLoginedStore';

const DUMMY_ID = 99;

export default function Login() {
  const { setUser } = isLoginedStore();
  const router = useRouter();
  const form = useForm();

  function handleClick() {
    // const loginData = {
    //   email: form.getValues('email'),
    //   password: form.getValues('password'),
    // };

    setUser(DUMMY_ID);
    document.cookie = `userId=${DUMMY_ID}; path=/; max-age=3600`;
    router.push('/');
    // try {
    //   const respones = loginAPI(loginData);
    //   setUser(respones.data.user_id);
    //   router.push('/');
    // } catch (err) {
    //   console.log('err== ', err);
    //   alert(`계정을 찾을 수 없습니다\n다시 확인해주세요`);
    // }
  }

  return (
    <FormProvider {...form}>
      <div className='flex w-full max-w-[500px] flex-col items-center'>
        <FormHeader title='로그인' />
        <form
          className='flex w-full flex-col items-center'
          onSubmit={form.handleSubmit(handleClick)}
        >
          <FormInputString type='email' id='email' placeholder='이메일을 입력해주세요' />
          <FormInputString type='password' id='password' placeholder='비밀번호를 입력해주세요' />
          <FormSubmitButton text='로그인하기' isSubmitting={form.formState.isSubmitting} />
        </form>
        <div className='gap-8 lg:gap-y-12 lg:mt-0 flex w-full flex-col items-center'>
          <hr className='border-gray5 w-full' />
          <div className='flex'>
            <OAuthButton provider='github' />
            <OAuthButton provider='naver' />
            <OAuthButton provider='kakao' />
          </div>
          <div>
            <AuthLinkButton
              text='이메일 찾기'
              handleClick={() => router.push('/login/find-email')}
            />
            <AuthLinkButton
              text='비밀번호 찾기'
              handleClick={() => router.push('/login/find-password')}
            />
            <AuthLinkButton
              text='회원가입'
              handleClick={() => router.push('/login/signup')}
              className='text-mainRed'
            />
          </div>
        </div>
      </div>
    </FormProvider>
  );
}
