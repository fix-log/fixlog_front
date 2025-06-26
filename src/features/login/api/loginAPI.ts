// 해당 파일은 임시 파일로
// API 준비되면 갈아엎어질 파일

import { FieldErrors } from "react-hook-form"
import { loginFormState } from "../model/loginFormState"

interface loginAPIProps {
    email: string
    password: string
    errors: FieldErrors<loginFormState>
}

export default function loginAPI ({email, password, errors}:loginAPIProps) {
    const data = {
        email: "true@gmail.com",
        password: '123456@A'}
    return (Object.keys(errors).length === 0) && data.email === email && data.password === password
}