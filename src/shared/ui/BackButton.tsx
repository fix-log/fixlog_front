'use client';

import { useRouter } from "next/navigation";

interface BackButtonProps {
    url?: string;
}

export default function BackButton({ url }: BackButtonProps) {
    const router = useRouter()

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (url && url !== '') router.push(`/${url}`);
        else router.back();
    };

    return <button className="cursor-pointer" onClick={handleClick}>{`<-`}</button>;
}
