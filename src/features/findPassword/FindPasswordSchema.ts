import z from 'zod';

export const schema = z
  .object({
    email: z.string().nonempty('이메일을 입력해주세요').email('이메일 형식이 아닙니다'),
    isEmailVerified: z.boolean(),
    name: z.string().nonempty('이름을 입력해주세요'),
    phoneNumber: z.string().nonempty('전화번호를 입력해주세요'),
  })
  .partial() // refine 호출이 안돼서 추가
  .refine((data) => data.isEmailVerified, {
    path: ['email'],
    message: '이메일 인증을 진행해주세요',
  });

export type FormValues = z.infer<typeof schema>;
