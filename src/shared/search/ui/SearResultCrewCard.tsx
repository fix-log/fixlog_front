import { CrewProject } from '@/entities/crew/type';
import { dummyCrewItems, dummyCrewPosts } from '@/entities/search/dummyCrewPosts';

function formatDate(dateStr: string) {
  const d = new Date(dateStr);
  return `${d.getFullYear()}.${(d.getMonth() + 1).toString().padStart(2, '0')}.${d.getDate().toString().padStart(2, '0')}`;
}

const project = dummyCrewPosts;

export default function SearResultCrewCard() {
  return (
    <div className='mx-auto my-[50px] flex w-[90%] flex-col gap-[25px]'>
      {project.map((project) => (
        <div
          key={project.id}
          className='border-gray4 h-auto rounded-md border bg-white p-[20px] px-[30px]'
        >
          {/* 모집상태 + 마감일 */}
          <div className='flex items-start'>
            {project.status === '모집중' ? (
              <p className='text-pointDarkGreen text-[16px] font-bold'> {project.status}</p>
            ) : (
              <p className='text-gray3 text-[16px] font-bold'> {project.status}</p>
            )}
            <p className='text-gray3 px-[10px] text-[16px] font-bold'>|</p>
            <p className='text-gray3 font-regula text-[16px]'> {project.date}</p>
          </div>

          {/* 제목 */}
          <h3 className='mt-[14px] text-lg font-bold md:text-xl'>{project.title}</h3>

          {/* 기술 스택 */}
          <div className='mt-[11px] flex flex-wrap gap-2'>
            {project.skills.map((skill, idx) => (
              <span
                key={idx}
                className='rounded bg-gray-100 px-3 py-1 text-xs text-zinc-700 md:text-sm'
              >
                {skill}
              </span>
            ))}
          </div>

          {/* 태그 */}
          <div className='border-gray5 mt-[25px] flex flex-wrap items-center gap-2 border-t pt-[20px]'>
            <span className='border-mainRed text-mainRed inline-block w-fit rounded-full border px-3 py-1 text-xs md:text-sm'>
              {project.tag}
            </span>

            <span className='ml-auto text-xs text-zinc-400 md:text-sm'>
              {project.author} · {project.time}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
