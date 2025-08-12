'use client';

import LeaveConfirmModal from '@/features/profile/LeaveConfirmModal';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';

interface PreventLeaveProps {
  enabled: boolean; // 폼 수정 감지 상태
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  customBack?: () => void; // 모달의 '나가기' 버튼 커스텀함수
}

export default function usePreventLeave({
  enabled,
  isModalOpen,
  setIsModalOpen,
  customBack,
}: PreventLeaveProps) {
  const [initialUrl, setInitialUrl] = useState('');

  // 이탈 모달 내 '나가기' 버튼 함수
  const handleLeave = () => {
    if (customBack) customBack();
    else history.back();
  };

  // 이탈 모달 내 '머무르기' 버튼 함수
  const handleStay = () => {
    history.pushState(null, '', location.href);
    setIsModalOpen(false);
  };

  // 뒤로가기 감지
  useEffect(() => {
    if (!enabled && !isModalOpen) {
      if (initialUrl) {
        history.back();
        setInitialUrl('');
      }
      return;
    }

    const handlePopState = () => {
      setIsModalOpen(true);
    };

    if (!initialUrl) {
      history.pushState(null, '', location.href);
      setInitialUrl(location.href);
    }

    window.addEventListener('popstate', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [enabled, isModalOpen, initialUrl, setInitialUrl, setIsModalOpen]);

  // 새로고침, 탭닫기 감지
  useEffect(() => {
    if (!enabled) return;

    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      e.preventDefault();
      e.returnValue = ''; // 일부 브라우저 호환성 문제
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [enabled]);

  if (!enabled) return false;
  return <LeaveConfirmModal onLeave={handleLeave} onStay={handleStay} />;
}
