import z from 'zod';

export const schema = z.object({
  name: z.string().nonempty('이름을 입력해주세요'),
  birthDate: z
    .string()
    .nonempty('생년월일을 입력해주세요')
    .min(8, 'YYYYMMDD 형식으로 입력해주세요')
    .max(8, 'YYYYMMDD 형식으로 입력해주세요'),
  phoneNumber: z.string().nonempty('전화번호를 입력해주세요'),
});

export type FormValues = z.infer<typeof schema>;
