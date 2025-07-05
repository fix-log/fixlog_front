'use client';

import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

interface ModalProps {
  children: React.ReactNode;
  className?: string;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export default function Modal({ children, className, setIsOpen }: ModalProps) {
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  const onClose = () => {
    setIsOpen(false);
  };

  if (!mounted) return null;

  // Portal로 모달 컴포넌트를 body에 띄우기
  return createPortal(
    <>
      <div className='fixed inset-0 z-90 bg-black/30' onClick={onClose} />
      <section
        className={`fixed inset-0 z-100 m-auto h-fit w-fit flex-col items-center justify-center rounded-[5px] bg-white ${className}`}
      >
        {children}
      </section>
    </>,
    document.body,
  );
}
