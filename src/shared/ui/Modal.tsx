'use client';

import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { cn } from '../lib/util';

interface ModalProps {
  children: React.ReactNode;
  className?: string;
  setIsOpen?: Dispatch<SetStateAction<boolean>>;
}

export default function Modal({
  children,
  className,
  setIsOpen,
}: ModalProps) {
  const [mounted, setMounted] = useState<boolean>(false);

  // SSR, CSR 간의 불일치 해결 (Hydration Error 방지)
  useEffect(() => {
    const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
    const header = document.querySelector('#fixed-header');
    setMounted(true);
    document.body.style.overflow = 'hidden';
    document.body.style.marginRight = `${scrollBarWidth}px`; // 스크롤 제거 후 공백 처리
    (header as HTMLElement).style.marginRight = `${scrollBarWidth}px`; // 헤더쪽 공백 처리
    return () => {
      setMounted(false);
      document.body.style.overflow = '';
      document.body.style.marginRight = '';
      (header as HTMLElement).style.marginRight = '';
    };
  }, []);

  const onClose = () => {
    if (!setIsOpen) return;
    setIsOpen(false);
  };

  // 서버에서 렌더링할 때는 document.body가 없으므로, 클라이언트에서만 렌더링
  if (!mounted) return null;

  // Portal로 모달 컴포넌트를 body에 띄우기 (독립적인 Stacking Context 생성)
  return createPortal(
    <>
      <div className='fixed inset-0 z-90 bg-black/30' onClick={onClose} />
      <section
        className={cn(
          'fixed inset-0 z-100 m-auto h-fit w-fit flex-col items-center justify-center rounded-[12px] bg-white md:rounded-[5px]',
          className,
        )}
      >
        {children}
      </section>
    </>,
    document.body,
  );
}
