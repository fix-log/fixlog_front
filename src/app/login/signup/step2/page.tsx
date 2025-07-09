'use client';

import FormHeader from '@/shared/form/ui/FormHeader';
import FormSubmitButton from '@/shared/form/ui/FormSubmitButton';
import { useRouter } from 'next/navigation';
import { FormProvider, useForm } from 'react-hook-form';
import { FormValues, schema } from '@/features/signup/model/schema/Step2';
import { zodResolver } from '@hookform/resolvers/zod';
import FormFields from '@/widgets/signup/step2/FormFields';

export default function Signup() {
  const router = useRouter();
  const form = useForm<FormValues>({
    resolver: zodResolver(schema)
  });

  function handleClick() {
    router.push('/login/signup/step3');
  }

  return (
    <FormProvider {...form}>
      <div className='flex w-full !max-w-[500px] flex-col items-center'>
        <FormHeader title='기본 정보' />
        <form className='w-full' onSubmit={form.handleSubmit(handleClick)}>
          <FormFields />
          <FormSubmitButton text='다음(2/4)' isSubmitting={form.formState.isSubmitting} />
        </form>
      </div>
    </FormProvider>
  );
}
