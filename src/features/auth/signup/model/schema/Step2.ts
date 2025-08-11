import z from 'zod';
import preprocessArrayFormField from './preprocessArrayFormField';

export const step2Schema = z.object({
  name: z.string().nonempty('이름을 입력해주세요'),
  birthDate: z
    .string()
    .nonempty('생년월일을 입력해주세요')
    .min(8, 'YYYYMMDD 형식으로 입력해주세요')
    .max(8, 'YYYYMMDD 형식으로 입력해주세요'),
  gender: z
    .string()
    .nullable()
    .refine((val) => val !== null && val !== '', {
      message: '성별을 선택해주세요',
    }),
  phoneNumber: z.string().nonempty('전화번호를 입력해주세요'),
  position: preprocessArrayFormField('포지션을 선택해주세요') as z.ZodType<string[], unknown>,
  career: z.preprocess((val) => val || '', z.string().nonempty('경력을 선택해주세요')) as z.ZodType<string, unknown>,
});

export type FormValues = z.infer<typeof step2Schema>;
export type FormValuesKeys = keyof FormValues;
