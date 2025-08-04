import { step2Schema } from '@/features/profile/model/Step2';
import { step3Schema } from '@/features/auth/signup/model/schema/Step3';
import { step4Schema } from '@/features/auth/signup/model/schema/Step4';
import { Dispatch, JSX, SetStateAction } from 'react';
import z from 'zod';
import { UseFormReturn } from 'react-hook-form';

export interface dataType {
  [key: number]: {
    element: JSX.Element;
    schema: UseFormReturn<any>; // 당장은 any로 설정, 1~3단계에 따라 타입이 달라짐
  };
}

export type Step2Type = z.infer<typeof step2Schema>;
export type Step3Type = z.infer<typeof step3Schema>;
export type Step4Type = z.infer<typeof step4Schema>;

export type FormDataType = Step2Type | Step3Type | Step4Type;

export type StateType = Partial<FormDataType>;
export type SetStateType = Dispatch<SetStateAction<StateType>>;
