'use client';

import Step1 from '@/widgets/auth/signup/step1/Step1';
import Step3 from '@/widgets/auth/signup/step3/Step3';
import Step4 from '@/widgets/auth/signup/step4/Step4';
import Step2 from '@/widgets/auth/signup/step2/Step2';
import { step1Schema } from '@/features/auth/signup/model/schema/Step1';
import { step2Schema } from '@/features/auth/signup/model/schema/Step2';
import { step3Schema } from '@/features/auth/signup/model/schema/Step3';
import { step4Schema } from '@/features/auth/signup/model/schema/Step4';

import { useMemo, useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form';
import { dataType, FormDataType, StateType } from './Types';

export default function Signup() {
  const [signupData, setSignupData] = useState<StateType>({});
  const [step, setStep] = useState(1);
  const maxStep = 4;

  console.log('임시호출 Signup', signupData);

  const formData = useMemo<dataType>(() => ({
  1: {
    element: <Step1 setStep={setStep} setData={setSignupData} />,
    schema: step1Schema,
    default: null,
  },
  2: {
    element: <Step2 maxStep={maxStep} step={step} setStep={setStep} setData={setSignupData} />,
    schema: step2Schema,
    default: { position: [], career: [] },
  },
  3: {
    element: <Step3 maxStep={maxStep} step={step} setStep={setStep} setData={setSignupData} />,
    schema: step3Schema,
    default: { devLanguage: [], stackAndTool: [], designAndCollab: [] },
  },
  4: {
    element: <Step4 step={maxStep} setStep={setStep} setData={setSignupData} />,
    schema: step4Schema,
    default: {
      devInterestField: [],
      techTrendsInterest: [],
      careerGrowth: [],
    },
  },
}), [maxStep, step, setStep, setSignupData]);

  const form = useForm<FormDataType>({
    resolver: zodResolver(formData[step].schema),
    defaultValues: { ...formData[step].default },
  });

  return <FormProvider {...form}>{formData[step].element}</FormProvider>;
}
