'use client';

import WorkroomFrom from '@/features/workroom/ui/WorkroomFrom';

export default function Page() {
  return (
    <>
      <h2 className='mt-5 w-full text-center text-[34px] font-extrabold md:mt-32'>워크룸 등록</h2>
      <WorkroomFrom type='등록' />
    </>
  );
}
