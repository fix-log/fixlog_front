import { UseFormRegister } from "react-hook-form"
import { FormErrorMessage, FormErrorMessageType } from "./FormErrorMessage"
import { loginFormState } from "@/features/login/model/loginFormState"

interface FormRegisterProps {
    name: keyof FormErrorMessageType
    register: UseFormRegister<loginFormState>
}

export default function FormRegister ({register, name}:FormRegisterProps) {
    const data = {
        email: {...register("email", {
            required: FormErrorMessage.email,
            pattern: {
                value: /\S+@\S+\.\S+/,
                message: FormErrorMessage.email
            }
        })},
        password: {...register("password", {
            required: FormErrorMessage.password,
            pattern: {
                value: /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).{8,16}$/,
                message: FormErrorMessage.password
            }
        })},
    }
    return data[name]
}