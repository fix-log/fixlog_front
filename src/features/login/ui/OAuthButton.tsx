'use client';

interface OAuthButtonProps {
    provider: 'github' | 'naver' | 'kakao';
}

export default function OAuthButton({ provider }: OAuthButtonProps) {
    return <button className="cursor-pointer bg-mainBlack rounded-full text-mainWhite w-[60px] h-[60px] !mr-[35px] last:!mr-0">{provider}</button>;
}
