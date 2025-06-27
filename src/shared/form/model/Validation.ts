// new RegExp("") 임시 유효성 설정

export const validation = {
    email: /\S+@\S+\.\S+/,
    nickname: new RegExp(""),
    password: /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).{8,16}$/,
    confirmPassword: new RegExp(""),

}