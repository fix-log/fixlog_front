'use client';

interface AuthLinkButton {
    text: string;
    handleClick: () => void;
}

export default function AuthLinkButton({ text, handleClick }: AuthLinkButton) {
    return <button onClick={handleClick}>{text}</button>;
}
