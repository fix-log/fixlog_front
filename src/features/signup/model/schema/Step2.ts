import z from 'zod';

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
    .refine((val) => val !== null && val !== '', { message: '성별을 선택해주세요' }),
  phoneNumber: z.string().nonempty('전화번호를 입력해주세요'),
  position: z.array(z.string()).min(1, '포지션을 선택해주세요'),
  career: z.array(z.string()).min(1, '경력을 선택해주세요'),
});

export type FormValues = z.infer<typeof step2Schema>;
export type FormValuesKeys = keyof FormValues;
