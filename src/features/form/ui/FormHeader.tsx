'use client';

interface FormHeaderProps {
    title: string;
}

export default function FormHeader({ title }: FormHeaderProps) {
    return <h1 className="cursor-default text-[34px] font-bold !my-14">{title}</h1>;
}
