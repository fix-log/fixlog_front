// new RegExp("") 임시 유효성 설정

export const validation = {
  email: /\S+@\S+\.\S+/,
  nickname: new RegExp(''),
  password: /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).{8,16}$/,
  confirmPassword: new RegExp(''),
  name: new RegExp(''), // 빌드 에러 때문에 임시 추가 (기태)
  birthDate: new RegExp(''), // 빌드 에러 때문에 임시 추가 (기태)
  phoneNumber: new RegExp(''), // 빌드 에러 때문에 임시 추가 (기태)
  url: new RegExp(''),
};
