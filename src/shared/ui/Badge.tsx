'use client';

import { cn } from '../lib/util';

interface BadgeProps {
  tag: string;
  className?: string;
}

export default function Badge({ tag, className }: BadgeProps) {
  return (
    <span
      className={cn(
        'text-mainRed border-mainRed w-fit rounded-full border px-2 py-0.5 text-[10px] max-md:my-2 md:px-3 md:text-lg',
        className,
      )}
    >
      {tag}
    </span>
  );
}
