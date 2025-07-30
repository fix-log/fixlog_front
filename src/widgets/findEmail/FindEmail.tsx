'use client';

import { FormValues, schema } from '@/features/finedEmail/FinedEmailSchema';
import FormHeader from '@/shared/form/ui/FormHeader';
import FormInputString from '@/shared/form/ui/FormInputString';
import FormSubmitButton from '@/shared/form/ui/FormSubmitButton';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import FindEmailModal from './FindEmailModal';

const DATA = [
  { label: '이름', type: 'text', id: 'name', placeholder: '이름을 입력해주세요' },
  { label: '생년월일', type: 'text', id: 'birthDate', placeholder: '생년월일을 입력해주세요' },
  { label: '전화번호', type: 'text', id: 'phoneNumber', placeholder: '전화번호를 입력해주세요' },
] as const;

export default function FindEmail() {
  const [foundEmail, setFoundEmail] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  function fromHandleSubmit(data: object) {
    try {
      // const respones = findEmail(data);
      const respones = 'iun00@pixlog.com';
      console.log(data);
      setFoundEmail(respones);
      setIsModalOpen(true);
    } catch (err) {
      alert('입력하신 정보와 일치하는 이메일을 찾을 수 없습니다');
      console.log(err, '실패');
    }
  }

  return (
    <FormProvider {...form}>
      <div className='flex w-full max-w-[500px] flex-col items-center'>
        <FormHeader title='이메일 찾기' />
        <form className='w-full' onSubmit={form.handleSubmit((data) => fromHandleSubmit(data))}>
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
      {isModalOpen && <FindEmailModal foundEmail={foundEmail as string} />}
    </FormProvider>
  );
}
