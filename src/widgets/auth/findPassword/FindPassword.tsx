'use client';

import { FormValues, schema } from '@/features/auth/findPassword/FindPasswordSchema';
import FormHeader from '@/shared/form/ui/FormHeader';
import FormInputString from '@/shared/form/ui/FormInputString';
import FormSubmitButton from '@/shared/form/ui/FormSubmitButton';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useForm, FormProvider } from 'react-hook-form';

const DATA = [
  { label: '이메일', type: 'email', id: 'email', placeholder: '이메일을 입력해주세요' },
  { label: '이름', type: 'text', id: 'name', placeholder: '이름을 입력해주세요' },
  { label: '전화번호', type: 'text', id: 'phoneNumber', placeholder: '전화번호를 입력해주세요' },
] as const;

export default function FindPassword() {
  const router = useRouter();
  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
  });
  const emailWatch = form.watch('isEmailVerified');
  const verfiedButton = (
    <button
      className={
        'bg-mainBlack text-mainWhite !my-[15px] !ml-3 h-[60px] w-[90px] cursor-pointer rounded-[5px] font-bold' +
        (emailWatch ? ' !bg-gray3 !cursor-default' : '')
      }
      type='button'
      onClick={async () => {
        await form.trigger('email');
        // 이메일 입력이 안된 상태라면 빠꾸
        const emailErr = form.formState.errors.email?.message;
        const isEnteredEmail = emailErr?.includes('인증'); // 이메일 에러 메세지로 분기처리 (인증 메세지는 바뀔 일이 없을 거 같아서 적용했습니다)
        if (isEnteredEmail) {
          form.setValue('isEmailVerified' as const, true);
          form.trigger('email');
        } // 이메일 인증 로직 추가
      }}
    >
      {emailWatch ? '완료' : '인증'}
    </button>
  );

  const fromHandleSubmit = async (data: object) => {
    try {
      // TODO: 선언 후 사용하지 않아서, 빌드 에러 때문에 일단 콘솔에 한번 찍어 놓을게요! (기태)
      console.log(data);
      // const respones = await findPassword(data)
      router.push('/login/edit-password');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <FormProvider {...form}>
      <div className='flex w-full max-w-[500px] flex-col items-center'>
        <FormHeader title='비밀번호 찾기' />
        <form className='w-full' onSubmit={form.handleSubmit((data) => fromHandleSubmit(data))}>
          {DATA.map((item) => (
            <FormInputString
              key={item.id}
              label={item.label}
              id={item.id}
              placeholder={item.placeholder}
              type={item.type}
            >
              {item.id === 'email' && verfiedButton}
            </FormInputString>
          ))}

          <FormSubmitButton text='비밀번호 찾기' isSubmitting={form.formState.isSubmitting} />
        </form>
      </div>
    </FormProvider>
  );
}
