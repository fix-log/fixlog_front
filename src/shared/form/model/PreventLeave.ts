'use client';

import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';

interface PreventLeaveProps {
  enabled: boolean;
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}

export default function preventLeave({
  enabled,
  isModalOpen,
  setIsModalOpen,
}: PreventLeaveProps) {
  console.log('함수 실행됨', enabled);
  const [initialUrl, setInitialUrl] = useState('');

  // 뒤로가기 감지
  useEffect(() => {
    console.log('뒤로가기 useeffect');
    if (!enabled && !isModalOpen) {
      console.log('정보 수정사항 없음');
      if (initialUrl) {
        console.log('경로가 저장되어 있음. 그래서 복사된 페이지 제거됨');
        history.back();
        setInitialUrl('');
      }
      return;
    }
    
    const handlePopState = (e: PopStateEvent) => {
      console.log('뒤로가기 감지됨. 그래서 모달 열림');
      setIsModalOpen(true);
      // if (enabled) {
      //   console.log('정보 수정사항 없는 상태. 그래서 경로 저장함');
      //   history.pushState(null, '', location.href);
      //   setInitialUrl(location.href);
      // }
    };

    if (!initialUrl) {
      console.log('저장된 경로가 없음. 그래서 저장함');
      history.pushState(null, '', location.href);
      setInitialUrl(location.href);
    }

    window.addEventListener('popstate', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [enabled, isModalOpen]);

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
  return;
}
