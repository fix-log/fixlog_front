'use client';

interface FormSubmitButtonProps {
    text: string;
    isSubmitting: boolean;
}

export default function FormSubmitButton({ text, isSubmitting }: FormSubmitButtonProps) {
    return (
        <button type="submit" disabled={isSubmitting}>
            {text}
        </button>
    );
}
