'use client';

interface AuthLinkButton {
    text: string;
}

export default function AuthLinkButton({ text }: AuthLinkButton) {
    return <button>{text}</button>;
}
