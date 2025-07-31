import z from 'zod';

export const schema = z
  .object({
    password: z
      .string()
      .nonempty('비밀번호를 입력해주세요')
      .min(8, '8자 이상, 16자 이하여야 합니다')
      .max(16, '8자 이상, 16자 이하여야 합니다')
      .refine((val) => /^(?=.*[A-Z])(?=.*[!@#$%^&*()_\-+={}[\]|\\:;"'<>,.?/~`]).+$/.test(val), {
        message: '대문자, 특수문자 각각 1개 이상 포함되어야 합니다',
      }),
    confirmPassword: z.string().nonempty('비밀번호를 다시 입력해주세요'),
  })
  .partial() // refine 호출이 안돼서 추가
  .refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: '비밀번호가 일치하지 않습니다',
  });

export type FormValues = z.infer<typeof schema>;
