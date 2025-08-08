'use client';

import { FormValues, schema } from '@/features/auth/editPassword/EditPasswordSchema';
import FormHeader from '@/shared/form/ui/FormHeader';
import FormInputString from '@/shared/form/ui/FormInputString';
import FormSubmitButton from '@/shared/form/ui/FormSubmitButton';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import EidtPasswordModal from './EditPasswordModal';

const DATA = [
  {
    label: '새 비밀번호',
    type: 'password',
    id: 'password',
    placeholder: '비밀번호를 입력해주세요',
  },
  {
    label: '비밀번호 확인',
    type: 'password',
    id: 'confirmPassword',
    placeholder: '비밀번호를 다시 입력해주세요',
  },
] as const;

export default function FindEmail() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  const fromHandleSubmit = async (data: object) => {
    try {
      // TODO: 선언 후 사용하지 않아서, 빌드 에러 때문에 일단 콘솔에 한번 찍어 놓을게요! (기태)
      console.log(data);
      // const respones = await editPassword(data)
      setIsModalOpen(true);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <FormProvider {...form}>
      <div className='flex w-full max-w-[500px] flex-col items-center'>
        <FormHeader title='비밀번호 변경하기' />
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

          <FormSubmitButton text='비밀번호 변경하기' isSubmitting={form.formState.isSubmitting} />
        </form>
      </div>
      {isModalOpen && <EidtPasswordModal />}
    </FormProvider>
  );
}
