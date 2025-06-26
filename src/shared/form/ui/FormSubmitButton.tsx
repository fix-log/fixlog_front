'use client';

interface FormSubmitButtonProps {
    text: string;
    isSubmitting: boolean;
    className?: string;
}

export default function FormSubmitButton({ text, isSubmitting, className }: FormSubmitButtonProps) {
    if (!className) className = ""
    return (
        <button className={`cursor-pointer rounded-[5px] bg-mainBlack text-mainWhite text-[20px] font-bold w-full h-[60px] !my-20 ` + className} type="submit" disabled={isSubmitting}>
            {text}
        </button>
    );
}

