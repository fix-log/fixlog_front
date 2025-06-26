'use client';

interface AuthLinkButton {
    text: string;
    handleClick: () => void;
    className?: string;
}

export default function AuthLinkButton({ text, handleClick, className }: AuthLinkButton) {
    if (!className) className = '';
    return (
        <button className={`cursor-pointer border-r-1 text-gray5 text-[18px] font-bold !px-3 last:border-none ` + className} onClick={handleClick}>
            {text}
        </button>
    );
}
