'use client';

import { FormValues, schema } from '@/features/signup/model/schema/Step3';
import FormHeader from '@/shared/form/ui/FormHeader';
import FormSubmitButton from '@/shared/form/ui/FormSubmitButton';
import FormFields from '@/widgets/signup/step3/FormFields';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { FormProvider, useForm } from 'react-hook-form';

export default function Step3() {
  const router = useRouter();
  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      devLanguage: [],
      stackAndTool: [],
      designAndCollab: [],
    },
  });

  function handleClick() {
    router.push('/login/signup/step4');
  }

  return (
    <FormProvider {...form}>
      <div className='flex w-full !max-w-[500px] flex-col items-center'>
        <FormHeader title='기술 역량' />
        <form className='w-full' onSubmit={form.handleSubmit(handleClick)}>
          <FormFields />
          <FormSubmitButton text='다음 (3/4)' isSubmitting={form.formState.isSubmitting} />
        </form>
      </div>
    </FormProvider>
  );
}
