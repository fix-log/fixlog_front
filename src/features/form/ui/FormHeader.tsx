'use client';

interface FormHeaderProps {
    title: string;
}

export default function FormHeader({ title }: FormHeaderProps) {
    return <h1>{title}</h1>;
}
