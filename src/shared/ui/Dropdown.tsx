'use client';

import { cn } from '@/shared/lib/util';
import { useEffect, useRef } from 'react';

interface DropdownProps {
  position: string;
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  className?: string;
}

export default function Dropdown({
  position,
  children,
  isOpen,
  onClose,
  className,
}: DropdownProps) {
  const ref = useRef<HTMLDivElement>(null);

  // 외부 클릭 시 닫히는 효과
  useEffect(() => {
    if (!isOpen) return;

    function handleClick(event: MouseEvent | TouchEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onClose();
      }
    }

    document.addEventListener('mousedown', handleClick);
    document.addEventListener('touchstart', handleClick);

    return () => {
      document.removeEventListener('mousedown', handleClick);
      document.removeEventListener('touchstart', handleClick);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div ref={ref} className={cn('absolute z-10', className, position)}>
      {children}
    </div>
  );
}
