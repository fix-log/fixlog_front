import { UseFormRegister } from "react-hook-form"
import { FormErrorMessage, FormErrorMessageType } from "./FormErrorMessage"
import { loginFormState } from "@/features/login/model/loginFormState"
import { Validation } from "./Validation"

interface FormRegisterProps {
    name: keyof FormErrorMessageType
    register: UseFormRegister<loginFormState>
}

export default function FormRegister ({register, name}:FormRegisterProps) {
    return {...register(name, {
        required: FormErrorMessage[name].required,
        pattern: {
            value: Validation[name],
            message: FormErrorMessage[name].message
        }
    })}
}