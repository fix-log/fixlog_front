import z from 'zod';
import preprocessArrayFormField from './preprocessArrayFormField';
import { ZodArray } from './Types';

export const step3Schema = z.object({
  devLanguage: preprocessArrayFormField('개발 언어을 선택해주세요') as ZodArray<string[]>,
  stackAndTool: preprocessArrayFormField('기술 스택 & 툴을 선택해주세요') as ZodArray<string[]>,
  designAndCollab: preprocessArrayFormField('디자인 & 협업 툴을 선택해주세요') as ZodArray<string[]>,
});

export type FormValues = z.infer<typeof step3Schema>;
export type FormValuesKeys = keyof FormValues;
