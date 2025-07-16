import { step1Schema } from "@/features/signup/model/schema/Step1";
import { step2Schema } from "@/features/signup/model/schema/Step2";
import { step3Schema } from "@/features/signup/model/schema/Step3";
import { step4Schema } from "@/features/signup/model/schema/Step4";
import { ReactElement } from "react";
import z, { ZodObject } from "zod";

export interface dataType {
  [key: number]: {
    element: ReactElement<any, any>;
    schema: ZodObject;
    default: { [key: string]: any } | null;
  };
}

type Step1Type = z.infer<typeof step1Schema>;
type Step2Type = z.infer<typeof step2Schema>;
type Step3Type = z.infer<typeof step3Schema>;
type Step4Type = z.infer<typeof step4Schema>;

export type FormDataType = Step1Type | Step2Type | Step3Type | Step4Type;
