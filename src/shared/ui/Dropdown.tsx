'use client';

import { cn } from '@/shared/lib/util';
import { forwardRef } from 'react';

interface DropdownProps {
  position: string;
  children: React.ReactNode;
  className?: string;
}

export default forwardRef<HTMLDivElement, DropdownProps>(function Dropdown(
  { position, children, className },
  ref,
) {
  return (
    <div ref={ref} className={cn('absolute z-10', className, position)}>
      {children}
    </div>
  );
});
