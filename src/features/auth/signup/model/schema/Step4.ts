import z, { ZodType } from 'zod';
import preprocessArrayFormField from './preprocessArrayFormField';

export const step4Schema = z.object({
  devInterestField: preprocessArrayFormField('관심 개발 분야를 선택해주세요') as z.ZodType<string[], any, any>,
  techTrendsInterest: preprocessArrayFormField('관심 기술 & 트랜드를 선택해주세요') as z.ZodType<string[], any, any>,
  careerGrowth: preprocessArrayFormField('커리어 & 성장을 선택해주세요') as z.ZodType<string[], any, any>,
  portfolio: z.instanceof(File).optional(),
  url: z.preprocess(
    (val) => (val === '' ? undefined : val),
    z.string().url('올바른 URL 형식이 아닙니다').optional(),
  ) as ZodType<string | undefined, any, any>,
});

export type FormValues = z.infer<typeof step4Schema>;
export type FormValuesKeys = keyof FormValues;
