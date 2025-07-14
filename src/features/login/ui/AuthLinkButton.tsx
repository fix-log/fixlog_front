'use client';

interface AuthLinkButton {
  text: string;
  handleClick: () => void;
  className?: string;
}

export default function AuthLinkButton({ text, handleClick, className }: AuthLinkButton) {
  if (!className) className = '';
  return (
    <button
      className={
        `text-gray5 cursor-pointer border-r-1 !px-3 text-[18px] font-bold last:border-none ` +
        className
      }
      onClick={handleClick}
    >
      {text}
    </button>
  );
}
