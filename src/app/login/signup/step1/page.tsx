'use client';

import FormHeader from '@/shared/form/ui/FormHeader';
import FormSubmitButton from '@/shared/form/ui/FormSubmitButton';
import { useRouter } from 'next/navigation';
import { FieldErrors, FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormValues, schema } from '@/features/signup/model/schema/Step1';
import Agreement from '@/widgets/signup/step1/Agreement';
import FormFields from '@/widgets/signup/step1/FormFields';

export default function Step1() {
  const router = useRouter();
  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  // 필수약관만 alert 표시
  function onError(errors: FieldErrors<typeof form>) {
    const messages = Object.values(errors).map((err) => err.message);
    if (messages.length > 0) {
      if (!messages[0]?.includes('필수 약관')) return;
      alert(messages[0]);
    }
  }

  function handleClick() {
    router.push('/login/signup/step2');
  }

  return (
    <FormProvider {...form}>
      <div className='flex w-full max-w-[500px] flex-col items-center'>
        <FormHeader title='회원가입' />
        <form className='w-full' onSubmit={form.handleSubmit(handleClick, onError)}>
          <FormFields />
          <hr className='border-gray5 !my-10 w-full' />
          <Agreement />
          <FormSubmitButton
            text='다음 (1/4)'
            isSubmitting={form.formState.isSubmitting}
            className=''
          />
        </form>
      </div>
    </FormProvider>
  );
}
