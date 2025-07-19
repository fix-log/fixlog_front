import { useEffect, RefObject } from 'react';

interface UseOutsideClickProps {
  ref: RefObject<HTMLElement | null>;
  onClose: () => void;
}

export default function useOutsideClick({ ref, onClose }: UseOutsideClickProps) {
  useEffect(() => {
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
  }, [ref, onClose]);
}
