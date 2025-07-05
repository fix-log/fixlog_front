'use client';

import { Dispatch, SetStateAction } from 'react';

interface ModalProps {
  children: React.ReactNode;
  className?: string;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export default function Modal({ children, className, setIsOpen }: ModalProps) {
  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className='fixed inset-0 z-50 bg-black/30' onClick={onClose} />
      <section
        className={`fixed inset-0 z-100 m-auto h-fit w-fit flex-col items-center justify-center rounded-[5px] bg-white ${className}`}
      >
        {children}
      </section>
    </>
  );
}
