"use client";

import Step1 from "@/widgets/signup/step1/Step1";
import Step2 from "@/widgets/signup/step2/Step2";
import Step3 from "@/widgets/signup/step3/Step3";
import Step4 from "@/widgets/signup/step4/Step4";
import { step1Schema } from "@/features/signup/model/schema/Step1";
import { step2Schema } from "@/features/signup/model/schema/Step2";
import { step3Schema } from "@/features/signup/model/schema/Step3";
import { step4Schema } from "@/features/signup/model/schema/Step4";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { dataType, FormDataType } from "./Types";

export default function Signup() {
  const [step, setStep] = useState(1);
  
  const formData: dataType = {
    1: {
      element: <Step1 setStep={setStep} />,
      schema: step1Schema,
    },
    2: {
      element: <Step2 setStep={setStep} />,
      schema: step2Schema,
    },
    3: {
      element: <Step3 setStep={setStep} />,
      schema: step3Schema,
    },
    4: {
      element: <Step4 setStep={setStep} />,
      schema: step4Schema,
    },
  };

  const form = useForm<FormDataType>({
    resolver: zodResolver(formData[step].schema),
  });

  return <FormProvider {...form}>{formData[step].element}</FormProvider>;
}
