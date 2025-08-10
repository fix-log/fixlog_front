'use client';

import { ProjectDetail } from '@/entities/crew/type';
import { format } from 'date-fns';

interface Props {
  project: ProjectDetail;
}

export default function ProjectInfoBox({ project }: Props) {
  const formattedDeadline = format(new Date(project.deadline), 'yyyy.MM.dd');
  const formattedPeriod = `${format(new Date(project.start_date), 'yyyy.MM.dd')} ~ ${format(new Date(project.end_date), 'yyyy.MM.dd')}`;
  // TODO: 선언 후 사용하지 않아서, 빌드 에러 때문에 일단 주석처리 할게요! (기태)
  // const formattedCreatedAt = format(new Date(project.created_at), 'yyyy.MM.dd');

  const labelClass = 'text-[18px] text-[#AAA] font-semibold leading-[23px] font-[SUIT]';
  const valueClass = 'text-[18px] text-[#202020] font-semibold leading-[23px] font-[SUIT]';

  return (
    <section className='mt-[70px] mr-[142px] ml-[100px]'>
      <div className='mb-8 grid grid-cols-[112px_1fr] gap-x-[33px] gap-y-[35px]'>
        <p className={labelClass}>모집 마감일</p>
        <p className={valueClass}>{formattedDeadline}</p>

        <p className={labelClass}>프로젝트 기간</p>
        <p className={valueClass}>
          {formattedPeriod}
          {project.is_estimated_period === 'estimated' && (
            <span className='text-mainRed ml-2 text-[12px]'>협의예정</span>
          )}
        </p>

        <p className={labelClass}>모집 인원</p>
        <p className={`${valueClass} flex flex-wrap gap-x-4`}>
          {project.project_positions.map((pos) => (
            <span key={pos.position}>
              {pos.position_name} {pos.count}명
            </span>
          ))}
        </p>

        <p className={labelClass}>개발 언어</p>
        <p className={`${valueClass} flex flex-wrap gap-1`}>
          {project.project_languages.map((lang, index) => (
            <span key={lang.language}>
              {lang.language_name}
              {index < project.project_languages.length - 1 && ','}
            </span>
          ))}
        </p>

        <p className={labelClass}>디자인&협업 툴</p>
        <p className={`${valueClass} flex flex-wrap gap-1`}>
          {project.project_skill_tools.map((tool, index) => (
            <span key={tool.skill_tool}>
              {tool.skill_tool_name}
              {index < project.project_skill_tools.length - 1 && ','}
            </span>
          ))}
        </p>
      </div>
      <hr className='mt-[67px] border-t border-gray-200' />

      <h2 className='mt-10 mb-2 font-[SUIT] text-[18px] font-semibold'>프로젝트 설명</h2>
      <p className='font-[SUIT] text-[18px] leading-[23px] whitespace-pre-line text-[#202020]'>
        {project.description}
      </p>
    </section>
  );
}
