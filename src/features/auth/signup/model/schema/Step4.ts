import z from 'zod';
import preprocessArrayFormField from './preprocessArrayFormField';
import { ZodArray } from './Types';

export const step4Schema = z.object({
  devInterestField: preprocessArrayFormField('관심 개발 분야를 선택해주세요') as ZodArray<string[]>,
  techTrendsInterest: preprocessArrayFormField('관심 기술 & 트랜드를 선택해주세요') as ZodArray<string[]>,
  careerGrowth: preprocessArrayFormField('커리어 & 성장을 선택해주세요') as ZodArray<string[]>,
  portfolio: z.instanceof(File).optional(),
  url: z.preprocess(
    (val) => (val === '' ? undefined : val),
    z.string().url('올바른 URL 형식이 아닙니다').optional(),
  ) as ZodArray<string | undefined>,
});

export type FormValues = z.infer<typeof step4Schema>;
export type FormValuesKeys = keyof FormValues;
