'use client';

import { FormValues, schema } from '@/features/signup/model/schema/Step4';
import FormHeader from '@/shared/form/ui/FormHeader';
import FormSubmitButton from '@/shared/form/ui/FormSubmitButton';
import FormFields from '@/widgets/signup/step4/FormFields';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { FormProvider, useForm } from 'react-hook-form';

export default function Step4() {
  const router = useRouter();
  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      devInterestField: [],
      techTrendsInterest: [],
      careerGrowth: [],
    },
  });

  function handleClick() {
    console.log('submit== ', true);
    router.push('/login');
  }

  console.log('form.errors== ', form.formState.errors);

  return (
    <FormProvider {...form}>
      <div className='flex w-full !max-w-[500px] flex-col items-center'>
        <FormHeader title='기타 정보' />
        <form className='w-full' onSubmit={form.handleSubmit(handleClick)}>
          <FormFields />
          <FormSubmitButton text='회원가입하기' isSubmitting={form.formState.isSubmitting} />
        </form>
      </div>
    </FormProvider>
  );
}
