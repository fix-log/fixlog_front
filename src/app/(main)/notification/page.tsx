'use client';

import NotiHeader from '@/widgets/notification/NotiHeader';
import NotiEmpty from '@/features/notification/ui/NotiEmpty';
import NotiList from '@/widgets/notification/NotiList';

const hasNoti = true;

export default function Notification() {
  return (
    <div className='mb-[100px] flex flex-col pt-12'>
      {/* 항상 페이지 상단에 고정 */}
      <NotiHeader />
      <div className='flex flex-1 flex-col'>{hasNoti ? <NotiList /> : <NotiEmpty />}</div>
    </div>
  );
}
