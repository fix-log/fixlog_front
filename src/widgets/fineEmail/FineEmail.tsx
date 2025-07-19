'use client';

import { FormValues, schema } from '@/features/finedEmail/FinedEmailSchema';
import FormHeader from '@/shared/form/ui/FormHeader';
import FormInputString from '@/shared/form/ui/FormInputString';
import FormSubmitButton from '@/shared/form/ui/FormSubmitButton';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { FormProvider, useForm } from 'react-hook-form';

const DATA = [
  { label: '이메일', type: 'email', id: 'email', placeholder: '이메일을 입력해주세요' },
  { label: '생년월일', type: 'text', id: 'birthDate', placeholder: '생년월일을 입력해주세요' },
  { label: '전화번호', type: 'text', id: 'phoneNumber', placeholder: '전화번호를 입력해주세요' },
] as const;

export default function FindEmail() {
  const router = useRouter();
  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  function fromHandleSubmit() {
    router.push('/login');
  }

  return (
    <FormProvider {...form}>
      <div className='flex w-full max-w-[500px] flex-col items-center'>
        <FormHeader title='이메일 찾기' />
        <form className='w-full' onSubmit={form.handleSubmit(fromHandleSubmit)}>
          {DATA.map((item) => (
            <FormInputString
              key={item.id}
              label={item.label}
              id={item.id}
              placeholder={item.placeholder}
              type={item.type}
            />
          ))}
          <FormSubmitButton text='이메일 찾기' isSubmitting={form.formState.isSubmitting} />
        </form>
      </div>
    </FormProvider>
  );
}
