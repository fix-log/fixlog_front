'use client';

import TermsAgreement from '@/features/signup/ui/TermsAgreement';
import FormHeader from '@/shared/form/ui/FormHeader';
import FormSubmitButton from '@/shared/form/ui/FormSubmitButton';
import FormInputString from '@/shared/form/ui/FormInputString';
import { useRouter } from 'next/navigation';
import { FieldErrors, useForm, useWatch } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useEffect, useState } from 'react';
import { schema } from '@/features/signup/model/schema/Step1';

export default function Step1() {
  const router = useRouter();
  const [isAllAgreed, setIsAllAgreed] = useState(false);
  // 전체동의 상태

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      isEmailVerified: false,
    },
  });

  function handleClick() {
    router.push('/login/signup/step2');
  }

  const emailWatch = form.watch('isEmailVerified');

  // 필수약관만 alert 표시
  function onError(errors: FieldErrors<typeof form>) {
    const messages = Object.values(errors).map((err) => err.message);
    if (messages.length > 0) {
      if (!messages[0]?.includes('필수 약관')) return;
      alert(messages[0]);
    }
  }

  const agreementKeys = [
    'isOver14Agreed',
    'isTermsAgreed',
    'isPrivacyAgreed',
    'isMarketingAgreed',
  ] as const;

  // 전체동의
  function selectAllAgreements() {
    agreementKeys.map((item) => form.setValue(item, !isAllAgreed));
    setIsAllAgreed(!isAllAgreed);
  }

  // 약관 디테일 구현 (전체 체크 상태 추적)
  // 약관 모두 동의일 때 and 전체동의 상태일 때 하나라도 취소할 떄
  const agreementWatch = useWatch({
    control: form.control,
    name: agreementKeys,
  }) as boolean[];

  useEffect(() => {
    const isAllTrue = agreementWatch.every(Boolean);
    setIsAllAgreed(isAllTrue);
    form.setValue('isAllAgreed' as const, isAllTrue);
    // ESLint가 의존성 잔소리해서 강제 무시 주석 추가
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [agreementWatch]);

  return (
    <div className='flex w-full max-w-[500px] flex-col items-center'>
      <FormHeader title='회원가입' />
      <form className='w-full' onSubmit={form.handleSubmit(handleClick, onError)}>
        <div className='flex w-full'>
          <FormInputString
            label='이메일'
            type='email'
            name='email'
            placeholder='이메일을 입력해주세요'
            form={form}
          >
            <button
              type='button'
              className={
                'bg-mainBlack text-mainWhite !my-[15px] !ml-3 h-[60px] w-[90px] cursor-pointer rounded-[5px] font-bold'
              }
              onClick={() => form.setValue('isEmailVerified' as const, true)}
            >
              {emailWatch ? '완료' : '인증'}
            </button>
          </FormInputString>
        </div>
        <FormInputString
          label='닉네임'
          type='text'
          name='nickname'
          placeholder='닉네임을 입력해주세요'
          form={form}
        />
        <FormInputString
          label='비밀번호'
          type='password'
          name='password'
          placeholder='비밀번호를 입력해주세요'
          form={form}
        />
        <FormInputString
          label='비밀번호 확인'
          type='password'
          name='confirmPassword'
          placeholder='비밀번호를 다시 입력해주세요'
          form={form}
        />
        <hr className='border-gray5 !my-10 w-full' />
        <div>
          <TermsAgreement
            id='isAllAgreed'
            text='전체 동의'
            className='!ml-2 text-[18px] font-bold'
            form={form}
            onClick={selectAllAgreements}
          />
          <div className='!mt-5'>
            <TermsAgreement
              id='isOver14Agreed'
              text='만 14세 이상입니다'
              isRequired={true}
              form={form}
            />
            <TermsAgreement
              id='isTermsAgreed'
              text='서비스 이용약관'
              isRequired={true}
              form={form}
            />
            <TermsAgreement
              id='isPrivacyAgreed'
              text='개인정보 수집 및 이용'
              isRequired={true}
              form={form}
            />
            <TermsAgreement
              id='isMarketingAgreed'
              text='이벤트, 프로모션 알림 메일 수신'
              isRequired={false}
              form={form}
            />
          </div>
        </div>
        <FormSubmitButton
          text='다음 (1/4)'
          isSubmitting={form.formState.isSubmitting}
          className=''
        />
      </form>
    </div>
  );
}
