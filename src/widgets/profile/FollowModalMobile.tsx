'use client';

import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { motion } from 'motion/react';

interface ModalProps {
  children: React.ReactNode;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}
export default function FollowModalMobile({ children, setIsOpen }: ModalProps) {
  const [mounted, setMounted] = useState<boolean>(false);

  // SSR, CSR 간의 불일치 해결 (Hydration Error 방지)
  useEffect(() => {
    setMounted(true);
    return () => {
      setMounted(false);
    };
  }, []);

  const onClose = () => {
    if (!setIsOpen) return;
    setIsOpen(false);
  };

  // 서버에서 렌더링할 때는 document.body가 없으므로, 클라이언트에서만 렌더링
  if (!mounted) return null;

  // Portal로 모달 컴포넌트를 body에 띄우기 (독립적인 Stacking Context 생성)
  return (
    <>
      
      
    </>
  );
}
