import z from 'zod';

export const schema = z.object({
  devInterestField: z.array(z.string()).min(1, '관심 개발 분야를 선택해주세요'),
  techTrendsInterest: z.array(z.string()).min(1, '관심 기술 & 트랜드를 선택해주세요'),
  careerGrowth: z.array(z.string()).min(1, '커리어 & 성장을 선택해주세요'),
  portfolio: z.preprocess(
    (val) => (val instanceof File && val.size > 0 ? val : undefined),
    z.instanceof(File).optional(),
  ),
  url: z.preprocess(
    (val) => (val === '' ? undefined : val),
    z.string().url('올바른 URL 형식이 아닙니다').optional(),
  ),
});

export type FormValues = z.infer<typeof schema>;
export type FormValuesKeys = keyof FormValues;
