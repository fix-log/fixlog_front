'use client';

interface FormSubmitButtonProps {
    text: string;
    handleClick: () => void;
}

export default function FormSubmitButton({ text, handleClick }: FormSubmitButtonProps) {
    return (
        <button className="" onClick={handleClick}>
            {text}
        </button>
    );
}
