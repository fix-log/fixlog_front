import z from 'zod';

export const schema = z.object({
  devInterestField: z.array(z.string()).min(1, '개발 언어을 선택해주세요'),
  techTrendsInterest: z.array(z.string()).min(1, '기술 스택 & 툴을 선택해주세요'),
  careerGrowth: z.array(z.string()).min(1, '디자인 & 협업 툴을 선택해주세요'),
  portfolio: z.instanceof(File).optional(),
  url: z.string().url('올바른 URL 형식이 아닙니다').optional(),
});

export type FormValues = z.infer<typeof schema>;
export type FormValuesKeys = keyof FormValues;
