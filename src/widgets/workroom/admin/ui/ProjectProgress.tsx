'use client';

import ToggleSwitch from '@/shared/ui/ToggleSwitch';

export default function ProjectProgress() {
  return (
    <div className='border-gray4 flex w-full justify-between rounded-[5px] border px-[40px] py-[25px]'>
      <h3 className='text-[18px] font-bold'> 프로젝트 진행여부</h3>
      <ToggleSwitch />
    </div>
  );
}
