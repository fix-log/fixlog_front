'use client';

interface OAuthButtonProps {
    provider: 'github' | 'naver' | 'kakao';
}

export default function OAuthButton({ provider }: OAuthButtonProps) {
    return <button>{provider}</button>;
}
