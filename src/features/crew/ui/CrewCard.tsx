import { CrewProject } from '@/entities/crew/type';

interface Props {
  project: CrewProject;
}

function formatDate(dateStr: string) {
  const d = new Date(dateStr);
  return `${d.getFullYear()}.${(d.getMonth() + 1).toString().padStart(2, '0')}.${d.getDate().toString().padStart(2, '0')}`;
}

export default function CrewCard({ project }: Props) {
  return (
    <div className='border-gray4 flex h-auto w-full flex-col rounded-md border bg-white px-6 py-6 md:h-[240px] md:px-10'>
      {/* 모집상태 + 마감일 */}
      <div className='flex items-start justify-between'>
        <span className='text-mainGreen text-sm font-semibold md:text-base'>
          {project.status === 'recruiting' ? '모집중' : '모집완료'} | {formatDate(project.deadline)}
        </span>
      </div>

      {/* 제목 */}
      <h3 className='mt-[14px] text-lg font-bold md:text-xl'>{project.title}</h3>

      {/* 기술 스택 */}
      <div className='mt-[11px] flex flex-wrap gap-2'>
        {project.project_skill_tools.map((tool, index) => (
          <span
            key={index}
            className='rounded bg-gray-100 px-3 py-1 text-xs text-zinc-700 md:text-sm'
          >
            {tool.skill_tool_name}
          </span>
        ))}
      </div>

      {/* 포지션들 + 작성자 */}
      <div className='mt-[30px] flex flex-wrap items-center gap-2 pt-2 md:mt-[44px]'>
        {project.project_positions.map((pos, index) => (
          <span
            key={index}
            className='border-mainRed text-mainRed inline-block w-fit rounded-full border px-3 py-1 text-xs md:text-sm'
          >
            {pos.position_name}
          </span>
        ))}

        <span className='ml-auto text-xs text-zinc-400 md:text-sm'>
          {project.user_nickname} · 4시간 전
        </span>
      </div>
    </div>
  );
}
