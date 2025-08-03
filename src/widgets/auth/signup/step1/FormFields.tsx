'use client';

import { FormValues } from '@/features/auth/signup/model/schema/Step1';
import FormInputString from '@/shared/form/ui/FormInputString';
import { useFormContext } from 'react-hook-form';

const DATA = [
  { label: '이메일', type: 'email', id: 'email', placeholder: '이메일을 입력해주세요' },
  { label: '닉네임', type: 'text', id: 'nickname', placeholder: '닉네임을 입력해주세요' },
  { label: '비밀번호', type: 'password', id: 'password', placeholder: '비밀번호를 입력해주세요' },
  {
    label: '비밀번호 확인',
    type: 'password',
    id: 'confirmPassword',
    placeholder: '이메일을 입력해주세요',
  },
] as const;

export default function FormFields() {
  const {
    watch,
    setValue,
    trigger,
    formState: { errors },
  } = useFormContext();
  const emailWatch = watch('isEmailVerified');
  
  const verfiedButton = (
    <button
      className={
        'bg-mainBlack text-mainWhite !my-[15px] !ml-3 h-[60px] w-[90px] cursor-pointer rounded-[5px] font-bold' +
        (emailWatch ? ' !bg-gray3 !cursor-default' : '')
      }
      type='button'
      onClick={async () => {
        await trigger('email');
        //이메일 입력이 안된 상태라면 빠꾸
        const isEnteredEmail =
          Object.keys(errors).length > 0 && (errors['email']?.message as string).includes('인증');
        if (isEnteredEmail) {
          setValue('isEmailVerified' as const, true);
          trigger('email');
        } // 이메일 인증 로직 추가
      }}
    >
      {emailWatch ? '완료' : '인증'}
    </button>
  );

  return (
    <div>
      {DATA.map((item) => (
        <div key={item.id} className={item.id === 'email' ? 'flex w-full' : ''}>
          <FormInputString<FormValues>
            id={item.id}
            label={item.label}
            type={item.type}
            placeholder={item.placeholder}
          >
            {item.id === 'email' && verfiedButton}
          </FormInputString>
        </div>
      ))}
    </div>
  );
}
