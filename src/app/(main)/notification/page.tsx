'use client';

import ToggleSwitch from '@/shared/ui/ToggleSwitch';

export default function Notification() {
  return (
    <div className='flex'>
      <div>
        <div className='flex'>
          <h2 className='text-h3 font-extrabold'>알림</h2>
          <ToggleSwitch />
        </div>
      </div>
    </div>
  );
}
