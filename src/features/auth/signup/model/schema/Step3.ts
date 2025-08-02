import z from 'zod';
import preprocessArrayFormField from './preprocessArrayFormField';

export const step3Schema = z.object({
  devLanguage: preprocessArrayFormField('개발 언어을 선택해주세요') as z.ZodType<string[], any, any>,
  stackAndTool: preprocessArrayFormField('기술 스택 & 툴을 선택해주세요') as z.ZodType<string[], any, any>,
  designAndCollab: preprocessArrayFormField('디자인 & 협업 툴을 선택해주세요') as z.ZodType<string[], any, any>,
});

export type FormValues = z.infer<typeof step3Schema>;
export type FormValuesKeys = keyof FormValues;
