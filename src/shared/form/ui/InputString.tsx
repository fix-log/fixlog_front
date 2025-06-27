'use client';

import FormRegister from '../model/FormRegister';
import { FormErrorMessageType } from '../model/FormErrorMessage';
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';

interface InputStringProps {
    type: 'text' | 'number' | 'email' | 'password';
    name: keyof FormErrorMessageType;
    placeholder: string;
    errors: FieldErrors;
    register: UseFormRegister<FieldValues>;
    label?: string;
    isRequired?: boolean;
    children?: React.ReactNode;
}

export default function InputString({ type, name, errors, placeholder, register, label, isRequired, children }: InputStringProps) {
    return (
        <div className="w-full">
            {label && (
                <p className="cursor-default font-bold !-mb-3">
                    {label}
                    {isRequired && <span className="text-mainRed">*</span>}
                </p>
            )}
            <div className='flex items-center w-full'>
                <input
                    className="border-1 border-gray4 rounded-[5px] text-[20px] w-full h-[60px] !pl-[17px] !pr-[20px] !my-[15px] focus:outline-none focus:border-pointDarkYellow/50 focus:shadow-[0_0_3.6px_#CDB200]"
                    type={type}
                    placeholder={placeholder}
                    {...FormRegister({ register, name })}
                />
                {children}
            </div>
            {errors[name] && <p className="text-pointDarkYellow !pl-3 !-mt-2">{errors[name].message?.toString()}</p>}
        </div>
    );
}
