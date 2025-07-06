'use client';

interface CrewProject {
  id: number;
  title: string;
  category: string;
  due_date: string;
}

export default function RecommendedCardList() {
  // 목업 데이터
  const projects: CrewProject[] = Array(6).fill({
    id: 1,
    title: '[집사 모집] 고양이 프로젝트 진행할 사람 구함',
    category: 'Designer',
    due_date: '2025-06-22',
  });

  return (
    <section className='mt-12 w-full'>
      <div className='mx-auto w-full max-w-[1440px] px-4'>
        <h2 className='mb-6 text-[20px] font-semibold text-zinc-800'>추천 프로젝트</h2>
        <div className='grid grid-cols-1 gap-x-[40px] gap-y-[30px] sm:grid-cols-2 lg:grid-cols-3'>
          {projects.map((projects, idx) => (
            <div
              key={idx}
              className='flex h-[250px] w-[410px] flex-col justify-between rounded-lg border border-zinc-200 px-6 pt-[27px] pb-[30px] shadow-sm transition hover:shadow-lg'
            >
              <div>
                <p className='text-sm text-zinc-400'>마감일 | {projects.due_date}</p>
                <h3 className='mt-[20px] line-clamp-2 text-[24px] font-medium text-zinc-800'>
                  {projects.title}
                </h3>
              </div>
              <span className='text-mainRed mt-[47px] inline-block w-fit rounded-full border border-orange-500 px-3 py-1 text-sm'>
                {projects.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
