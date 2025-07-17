'use client';

import Step1 from '@/widgets/signup/step1/Step1';
import Step2 from '@/widgets/signup/step2/Step2';
import Step3 from '@/widgets/signup/step3/Step3';
import Step4 from '@/widgets/signup/step4/Step4';
import { step1Schema } from '@/features/signup/model/schema/Step1';
import { step2Schema } from '@/features/signup/model/schema/Step2';
import { step3Schema } from '@/features/signup/model/schema/Step3';
import { step4Schema } from '@/features/signup/model/schema/Step4';

import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form';
import { dataType, FormDataType, StateType } from './Types';

export default function Signup() {
  const [signupData, setSignupData] = useState<StateType>({});
  const [step, setStep] = useState(2);

  const formData: dataType = {
    1: {
      element: <Step1 setStep={setStep} setSignupData={setSignupData} />,
      schema: step1Schema,
      default: null,
    },
    2: {
      element: <Step2 setStep={setStep} setSignupData={setSignupData} />,
      schema: step2Schema,
      default: { position: [], career: [] },
    },
    3: {
      element: <Step3 setStep={setStep} setSignupData={setSignupData} />,
      schema: step3Schema,
      default: { devLanguage: [], stackAndTool: [], designAndCollab: [] },
    },
    4: {
      element: <Step4 setStep={setStep} signupData={signupData} setSignupData={setSignupData} />,
      schema: step4Schema,
      default: {
        devInterestField: [],
        techTrendsInterest: [],
        careerGrowth: [],
      },
    },
  };

  const form = useForm<FormDataType>({
    resolver: zodResolver(formData[step].schema),
    defaultValues: { ...formData[step].default },
  });

  return <FormProvider {...form}>{formData[step].element}</FormProvider>;
}
