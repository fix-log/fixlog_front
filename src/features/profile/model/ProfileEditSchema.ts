import z from 'zod';
import { step2Schema } from './Step2';
import { step3Schema } from '@/features/auth/signup/model/schema/Step3';
import { step4Schema } from '@/features/auth/signup/model/schema/Step4';

export const profileAllSchema = step2Schema.merge(step3Schema).merge(step4Schema);

export type FormValues = z.infer<typeof profileAllSchema>;
export type FormValuesKeys = keyof FormValues;
