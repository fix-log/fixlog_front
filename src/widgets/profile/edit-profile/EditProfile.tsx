'use client';

import { step2Schema } from '@/features/profile/model/Step2';
import { step3Schema } from '@/features/auth/signup/model/schema/Step3';
import { step4Schema } from '@/features/auth/signup/model/schema/Step4';
import Step2 from '@/widgets/auth/signup/step2/Step2';
import Step3 from '@/widgets/auth/signup/step3/Step3';
import Step4 from '@/widgets/auth/signup/step4/Step4';
import { useState } from 'react';
import { FormProvider, useForm, UseFormReturn } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { dataType, FormDataType } from './Types';
import z from 'zod';
import preventLeave from '@/shared/form/model/PreventLeave';

export default function EditProfile() {
  // 더미
  const response = {
    viewUserId: 99,
    isMe: true,
    level: 1,
    name: '이희정',
    nickname: '이운',
    email: 'test@fixlog.com',
    password: '123456!A',
    password_check: '123456!A',
    phone_number: '010-1111-2222',
    birth: '001231',
    position: ['FrontEnd'],
    experience: ['개발 공부 / 학습', '포트폴리오 만들기', '커뮤니티 활동'],
    language: ['TypeScript', 'JavaScript'],
    tech: ['react', 'nextjs', 'GitHub', 'Git'],
    coop_tool: ['Figma', 'Notion'],
    interest_field: ['프론트엔드', '안드로이드', '게임 개발'],
    interest_trend: ['사이드 프로젝트', '스타트업', '코드 리뷰'],
    career: '신입',
    portfolio: undefined,
    ref_link: 'https://fixlog.com',
  };
  const basicInfo = {
    name: response.name,
    birthDate: response.birth,
    phoneNumber: response.phone_number,
    gender: '여성', // 더미 데이터로 설정
    position: response.position,
    career: response.career,
    profileImage: '', // 더미 데이터로 설정
  };
  const skillInfo = {
    devLanguage: response.language,
    stackAndTool: response.tech,
    designAndCollab: response.coop_tool,
  };
  const interestInfo = {
    devInterestField: response.interest_field,
    techTrendsInterest: response.interest_trend,
    careerGrowth: response.experience,
    portfolio: response.portfolio,
    ref_link: response.ref_link,
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [EditData, setEditData] = useState({});
  const [step, setStep] = useState(1);
  const maxStep = 3;

  console.log('임시호출 EditProfile -> EditData', EditData);

  const formData: dataType = {
    1: {
      element: (
        <Step2
          maxStep={maxStep}
          step={step}
          setStep={setStep}
          setData={setEditData}
          disabled={true}
        />
      ),
      schema: useForm<z.infer<typeof step2Schema>>({
        resolver: zodResolver(step2Schema),
        defaultValues: { ...basicInfo },
      }),
    },
    2: {
      element: <Step3 maxStep={maxStep} step={step} setStep={setStep} setData={setEditData} />,
      schema: useForm<z.infer<typeof step3Schema>>({
        resolver: zodResolver(step3Schema),
        defaultValues: { ...skillInfo },
      }),
    },
    3: {
      element: <Step4 step={maxStep} setStep={setStep} setData={setEditData} />,
      schema: useForm<z.infer<typeof step4Schema>>({
        resolver: zodResolver(step4Schema),
        defaultValues: { ...interestInfo },
      }),
    },
  } as const;

  // 프로필수정 페이지 뒤로가기 이탈 감지
  const formSteps = [formData[1].schema, formData[2].schema, formData[3].schema];
  const enabled = formSteps.some((item) => item.formState.isDirty);
  const leaveGuard = preventLeave({ enabled, isModalOpen, setIsModalOpen });

  // 눈물의 똥꼬쇼... 타입 호환(number, literal) 때문에 어떻게든 온 몸 비틀어서 연결
  // step의 number도 포기할 수 없다. formData의 literal도 포기할 수 없다ㅠ

  // step=number, formData[literal] 타입 충돌로 각각 호출
  function getFormData(): UseFormReturn<FormDataType> {
    if (step === 1) return formData[step as 1].schema as UseFormReturn<FormDataType>;
    if (step === 2) return formData[step as 2].schema as UseFormReturn<FormDataType>;
    else return formData[step as 3].schema as UseFormReturn<FormDataType>;
  }

  // ''
  function getElement() {
    if (step === 1) return formData[step as 1].element;
    if (step === 2) return formData[step as 2].element;
    else return formData[step as 3].element;
  }

  return (
    <FormProvider {...getFormData()}>
      <div className='flex flex-col w-full items-center px-5'>{getElement()}</div>
      {isModalOpen && leaveGuard}
    </FormProvider>
  );
}
