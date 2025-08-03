'use client';

import { DropdownSelectOptions } from '@/shared/types/DropdownSelectOptions';
import CustomDropdown from '@/shared/ui/CustomDropdown';
import ToggleSwitch from '@/shared/ui/ToggleSwitch';

export default function NotiHeader() {
  return (
    <div className='mt-[50px] mb-[50px]'>
      <div className='flex w-[100vw] max-w-[1440px] items-center justify-between gap-6 px-7'>
        <div className='flex items-center'>
          <h2 className='text-h3 pr-[10px] font-extrabold'>알림</h2>
          <ToggleSwitch />
        </div>
        <CustomDropdown
          options={DropdownSelectOptions.notification}
          placeholder='구분'
          width='w-[169px]'
          required
        />
      </div>
    </div>
  );
}
