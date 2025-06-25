'use clinet';

interface InputProps {
    type: 'text' | 'number' | 'email' | 'password';
    placeholder: string;
    label?: string;
    isRequired?: boolean;
}

export default function Input({ label, type, placeholder, isRequired }: InputProps) {
    return (
        <div>
            {label && <p className="cursor-default">
                {label}
                {isRequired && <span className="text-mainRed">*</span>}
            </p>}
            <input type={type} placeholder={placeholder} />
        </div>
    );
}
