'use client';

import NotiHeader from '@/widgets/notification/NotiHeader';
import NotiEmpty from '@/features/notification/ui/NotiEmpty';

const hasNoti = false;

export default function Notification() {
  return (
    <div className='flex min-h-[70vh] max-w-3xl flex-col pt-12'>
      {/* 항상 페이지 상단에 고정 */}
      <NotiHeader />
      <div className='flex flex-1 flex-col'>
        {hasNoti ? (
          // 알림 리스트 컴포넌트 (예시)
          <div> {/* NotificationList 들어올 자리 */} </div>
        ) : (
          <NotiEmpty />
        )}
      </div>
    </div>
  );
}
