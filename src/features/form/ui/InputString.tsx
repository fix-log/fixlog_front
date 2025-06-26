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
        <div className='w-full'>
            {label && (
                <p className="cursor-default">
                    {label}
                    {isRequired && <span className="text-mainRed">*</span>}
                </p>
            )}
            <input className="border-1 border-gray4 rounded-[5px] text-[20px] w-full h-[60px] !pl-[17px] !pr-[20px] !my-[10px] focus:outline-none focus:border-pointDarkYellow/50 focus:shadow-[0_0_3.6px_#CDB200]" type={type} placeholder={placeholder} {...FormRegister({ register, name })} />
            {errors[name] && <p className='text-pointDarkYellow !pl-3 !-mt-2'>{errors[name].message}</p>}
        </div>
    );
}
