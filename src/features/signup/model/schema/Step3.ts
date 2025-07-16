import z from 'zod';
import preprocessArrayFormField from './preprocessArrayFormField';

export const step3Schema = z.object({
  devLanguage: preprocessArrayFormField('개발 언어을 선택해주세요'),
  stackAndTool: preprocessArrayFormField('기술 스택 & 툴을 선택해주세요'),
  designAndCollab: preprocessArrayFormField('디자인 & 협업 툴을 선택해주세요'),
});

export type FormValues = z.infer<typeof step3Schema>;
export type FormValuesKeys = keyof FormValues;
