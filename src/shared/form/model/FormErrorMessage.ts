export interface FieldErrorMessage {
  required: string;
  message: string;
}

export interface FormErrorMessageType {
    email: FieldErrorMessage;
    password: FieldErrorMessage;
    confirmPassword: FieldErrorMessage;
    nickname: FieldErrorMessage;
    name: FieldErrorMessage;
    birthDate: FieldErrorMessage;
    phoneNumber: FieldErrorMessage;
}

export const formErrorMessage: FormErrorMessageType = {
    email: {
        required: "이메일을 입력해주세요",
        message: "이메일 형식이 맞지 않습니다"
    },
    password: {
        required: "비밀번호를 입력해주세요",
        message: "영문, 8자 이상, 16자 이하, 대문자 1개 이상, 특수문자 1개 이상 포함되어야 합니다"
    },
    confirmPassword: {
        required: "비밀번호를 입력해주세요",
        message: "비밀번호가 일치하지 않습니다"
    },
    nickname: {
        required: "닉네임을 입력해주세요",
        message: "닉네임 에러 문구"
    },
    name: {
        required: "이름을 입력해주세요",
        message: ""
    },
    birthDate: {
        required: "생년월일을 입력해주세요",
        message: ""
    },
    phoneNumber: {
        required: "전화번호를 입력해주세요",
        message: ""
    }
}
