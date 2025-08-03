import Link from 'next/link';

export default function CreateCrewBanner() {
  return (
    <section className='flex w-full flex-col gap-5 pt-6 md:gap-10 md:pt-16'>
      <div className='bg-mainRed/4 flex gap-4 py-16'>
        <Link href='/crew/create' className='mx-auto'>
          <div className='border-mainRed/40 flex flex-col items-center justify-center gap-4 rounded-[5px] border bg-white px-18.5 py-20 shadow-[0_0_13.5px_0_rgba(255,68,39,0.2)]'>
            <div className='bg-mainRed mb-5.5 flex h-15 w-15 items-center justify-center rounded-full text-white'>
              <span className='text-5xl'>+</span>
            </div>
            <h3 className='text-[32px] font-extrabold'>크루 모집 하기</h3>
            <p className='text-gray3 text-[18px]'>픽스로그에서 나만의 프로젝트를 만들어보세요!</p>
          </div>
        </Link>
      </div>
    </section>
  );
}
