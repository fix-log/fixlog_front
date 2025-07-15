"use client";

import Step1 from "@/widgets/signup/step1/Step1";
import Step2 from "@/widgets/signup/step2/Step2";
import Step3 from "@/widgets/signup/step3/Step3";
import Step4 from "@/widgets/signup/step4/Step4";
import { step1Schema } from "@/features/signup/model/schema/Step1";
import { step2Schema } from "@/features/signup/model/schema/Step2";
import { step3Schema } from "@/features/signup/model/schema/Step3";
import { step4Schema } from "@/features/signup/model/schema/Step4";

import { zodResolver } from "@hookform/resolvers/zod";
import { ReactElement, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { z, ZodObject } from "zod";

interface dataType {
  [key: number]: {
    element: ReactElement<any, any>;
    schema: ZodObject;
  };
}

type Step1Type = z.infer<typeof step1Schema>
type Step2Type = z.infer<typeof step2Schema>
type Step3Type = z.infer<typeof step3Schema>
type Step4Type = z.infer<typeof step4Schema>

type FormDataType = Step1Type | Step2Type | Step3Type | Step4Type

const formData: dataType = {
  1: {
    element: <Step1 />,
    schema: step1Schema,
  },
  2: {
    element: <Step2 />,
    schema: step2Schema,
  },
  3: {
    element: <Step3 />,
    schema: step3Schema,
  },
  4: {
    element: <Step4 />,
    schema: step4Schema,
  },
};

export default function Signup() {
  const [step, setStep] = useState(1);
  const form = useForm<FormDataType>({
    resolver: zodResolver(formData[step].schema),
  });
  return <FormProvider {...form}>{formData[step].element}</FormProvider>;
}
