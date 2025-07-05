import z from 'zod';

const literalErrorMap = {
  errorMap: () => ({ message: '필수 약관 항목을 확인해주세요' }),
};

export const schema = z
  .object({
    email: z.string().nonempty('이메일을 입력해주세요').email('이메일 형식이 아닙니다'),
    nickname: z.string().nonempty('닉네임을 입력해주세요'),
    password: z
      .string()
      .nonempty('비밀번호를 입력해주세요')
      .min(8, '8자 이상, 16자 이하여야 합니다')
      .max(16, '8자 이상, 16자 이하여야 합니다')
      .refine((val) => /^(?=.*[A-Z])(?=.*[!@#$%^&*()_\-+={}[\]|\\:;"'<>,.?/~`]).+$/.test(val), {
        message: '대문자, 특수문자 각각 1개 이상 포함되어야 합니다',
      }),
    confirmPassword: z.string().nonempty('비밀번호를 다시 입력해주세요'),
    isOver14Agreed: z.literal(true, literalErrorMap),
    isTermsAgreed: z.literal(true, literalErrorMap),
    isPrivacyAgreed: z.literal(true, literalErrorMap),
    isMarketingAgreed: z.boolean().optional(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: '비밀번호가 일치하지 않습니다',
  });
