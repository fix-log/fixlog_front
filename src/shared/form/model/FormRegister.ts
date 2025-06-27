import { UseFormRegister } from "react-hook-form"
import { formErrorMessage, FormErrorMessageType } from "./FormErrorMessage"
import { validation } from "./Validation"

interface FormRegisterProps {
    name: keyof FormErrorMessageType
    register: UseFormRegister<any> //타입선언 해매다 일단 임시 any타입 선언
}

export default function formRegister ({register, name}:FormRegisterProps) {
    return {...register(name, {
        required: formErrorMessage[name].required,
        pattern: {
            value: validation[name],
            message: formErrorMessage[name].message
        }
    })}
}