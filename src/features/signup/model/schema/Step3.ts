import z from 'zod';

export const schema = z.object({
  devLanguage: z.array(z.string()).min(1, '개발 언어을 선택해주세요'),
  stackAndTool: z.array(z.string()).min(1, '기술 스택 & 툴을 선택해주세요'),
  designAndCollab: z.array(z.string()).min(1, '디자인 & 협업 툴을 선택해주세요'),
});

export type FormValues = z.infer<typeof schema>;
export type FormValuesKeys = keyof FormValues;
