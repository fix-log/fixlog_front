import z, { ZodType } from 'zod';
import preprocessArrayFormField from './preprocessArrayFormField';

export const step4Schema = z.object({
  devInterestField: preprocessArrayFormField('관심 개발 분야를 선택해주세요'),
  techTrendsInterest: preprocessArrayFormField(
    '관심 기술 & 트랜드를 선택해주세요'
  ),
  careerGrowth: preprocessArrayFormField('커리어 & 성장을 선택해주세요'),
  portfolio: z.preprocess(
    (val) => (val instanceof File && val.size > 0 ? val : undefined),
    z.instanceof(File).optional()
  ) as ZodType<File | undefined>,
  url: z.preprocess(
    (val) => (val === '' ? undefined : val),
    z.string().url('올바른 URL 형식이 아닙니다').optional()
  ) as ZodType<string | undefined>,
});

export type FormValues = z.infer<typeof step4Schema>;
export type FormValuesKeys = keyof FormValues;
