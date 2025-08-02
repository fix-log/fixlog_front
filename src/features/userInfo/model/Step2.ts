import { step2Schema as SignupStep2 } from '@/features/auth/signup/model/schema/Step2';
import z from 'zod';

export const step2Schema = SignupStep2.merge(
  z.object({
    name: z.string().optional(),
    birthDate: z.string().optional(),
    profileImage: z.string().optional(),
  }),
)

export type FormValues = z.infer<typeof step2Schema>;
export type FormValuesKeys = keyof FormValues;