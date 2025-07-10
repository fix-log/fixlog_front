'use client';

interface Project {
  id: number;
  user_nickname: string;
  title: string;
  category: string;
  end_date: string;
}

export default function PopularCardList() {
  // 목업 데이터
  const projects: Project[] = Array(8).fill({
    id: 1,
    user_nickname: '미니미니',
    title: '😼고양이 왕국😼 서버 구축할 사람 구함',
    category: 'Backend',
    end_date: '2025-06-22',
  });

  return (
    <section className='mt-[85px] mb-[100px] flex justify-center'>
      <div className='w-full max-w-[1440px]'>
        <h2 className='mb-6 text-xl font-semibold'>인기 프로젝트</h2>
        <div className='grid grid-cols-4 gap-x-[20px] gap-y-[20px]'>
          {projects.map((project, index) => (
            <div
              key={index}
              className='border-gray5 flex h-[266px] w-[334px] flex-col justify-between rounded-[10px] border bg-white p-6 transition hover:shadow-md'
            >
              {/* 상단 */}
              <div className='bg-gray6 flex h-[203px] w-full flex-col justify-between rounded-[10px] p-[9px]'>
                <div className='mt-[23px] w-[192px]'>
                  <h3 className='text-lg leading-snug font-semibold'>{project.title}</h3>
                </div>
                <div className='flex justify-end'>
                  <span className='border-mainRed text-mainRed inline-block w-fit rounded-full border px-3 py-1 text-sm'>
                    {project.category}
                  </span>
                </div>
              </div>

              {/* 하단 */}
              <div className='mt-[15px] flex justify-between text-sm'>
                <span className='font-semibold'>{project.user_nickname}</span>
                <span className='text-gray3'>{project.end_date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
