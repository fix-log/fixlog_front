'use client';

import FormRegister from '../model/FormRegister';
import { FormErrorMessageType } from '../model/FormErrorMessage';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { loginFormState } from '@/features/login/model/loginFormState';

interface InputStringProps {
    type: 'text' | 'number' | 'email' | 'password';
    name: keyof FormErrorMessageType;
    errors: FieldErrors<loginFormState>;
    placeholder: string;
    register: UseFormRegister<loginFormState>;
    label?: string;
    isRequired?: boolean;
}

export default function InputString({ type, name, errors, placeholder, register, label, isRequired }: InputStringProps) {
    return (
        <div>
            {label && (
                <p className="cursor-default">
                    {label}
                    {isRequired && <span className="text-mainRed">*</span>}
                </p>
            )}
            <input type={type} placeholder={placeholder} {...FormRegister({register, name})} />
            {errors[name] && <p>{errors[name].message}</p>}
        </div>
    );
}
