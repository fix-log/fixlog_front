// 해당 파일은 임시 파일로
// API 준비되면 갈아엎어질 파일

import { FieldErrors } from "react-hook-form"
import { LoginFormStateType } from "../model/loginFormState"

interface LoginAPIProps {
    email: string
    password: string
    errors: FieldErrors<LoginFormStateType>
}

export default function loginAPI ({email, password, errors}:LoginAPIProps) {
    const data = {
        email: "true@gmail.com",
        password: '123456@A'}
    return (Object.keys(errors).length === 0) && data.email === email && data.password === password
}