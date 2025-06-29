export interface FieldErrorMessage {
  required: string;
  message: string;
}

export interface FormErrorMessageType {
  email: FieldErrorMessage;
  password: FieldErrorMessage;
}

export const formErrorMessage: FormErrorMessageType = {
  email: {
    required: '이메일을 입력해주세요',
    message: '이메일 형식이 맞지 않습니다',
  },
  password: {
    required: '비밀번호를 입력해주세요',
    message: '영문, 8자 이상, 16자 이하, 대문자 1개 이상, 특수문자 1개 이상 포함되어야 합니다',
  },
};
