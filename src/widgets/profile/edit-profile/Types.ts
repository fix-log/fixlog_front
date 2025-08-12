import { step2Schema } from '@/features/profile/model/Step2';
import { step3Schema } from '@/features/auth/signup/model/schema/Step3';
import { step4Schema } from '@/features/auth/signup/model/schema/Step4';
import { Dispatch, JSX, SetStateAction } from 'react';
import z from 'zod';
import { FieldValues, UseFormReturn } from 'react-hook-form';

type StepConfig<T extends FieldValues> = {
  element: JSX.Element;
  schema: UseFormReturn<T, unknown, unknown>;
};

export interface dataType {
  1: StepConfig<Step2Type>;
  2: StepConfig<Step3Type>;
  3: StepConfig<Step4Type>;
}

export type Step2Type = z.infer<typeof step2Schema>;
export type Step3Type = z.infer<typeof step3Schema>;
export type Step4Type = z.infer<typeof step4Schema>;

export type FormDataType = Step2Type | Step3Type | Step4Type;

export type StateType = Partial<FormDataType>;
export type SetStateType = Dispatch<SetStateAction<StateType>>;
