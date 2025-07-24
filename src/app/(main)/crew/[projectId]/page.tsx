import { ProjectDetail } from '@/entities/crew/type';
import ApplyButton from '@/features/crew/apply/ApplyButton';
import BookmarkButton from '@/features/crew/apply/BookmarkButton';
import ProjectHeader from '@/widgets/crew-detail/ProjectHeader';
import ProjectInfoBox from '@/widgets/crew-detail/ProjectInfoBox';

const MOCK_PROJECT: ProjectDetail = {
  id: 1,
  user: 3,
  user_nickname: '하얀고앵쓰',
  title: '고양이 데이트 앱',
  deadline: '2025-07-30T00:00:00Z',
  start_date: '2025-08-01T00:00:00Z',
  end_date: '2025-09-30T00:00:00Z',
  is_estimated_period: 'estimated',
  description:
    '이 프로젝트는 동네 고양이 데이트 플랫폼을 구축하는 것을 목표로 합니다.\n\n에디터, 유저 프로필, 댓글, 좋아요 기능 등을 포함합니다.\n고양이최고고양이최고고양이최고고양이최고고양이최고고양이최고고양이최고고양이최고고양이최고고양이최고고양이최고고양이최고고양이최고고양이최고고양이최고고양이최고고양이최고고양이최고고양이최고',
  count: 5,
  status: 'recruiting',
  project_positions: [
    { position: 1, position_name: '프론트엔드', count: 2 },
    { position: 2, position_name: '디자이너', count: 1 },
  ],
  project_languages: [
    { language: 1, language_name: 'TypeScript' },
    { language: 2, language_name: 'JavaScript' },
  ],
  project_skill_tools: [
    { skill_tool: 1, skill_tool_name: 'Figma' },
    { skill_tool: 2, skill_tool_name: 'Notion' },
  ],
  created_at: '2025-07-18T10:00:00Z',
  updated_at: '2025-07-19T10:00:00Z',
};

export default function CrewProjectPage() {
  return (
    <>
      <ProjectHeader
        title={MOCK_PROJECT.title}
        createdAt={MOCK_PROJECT.created_at}
        status={MOCK_PROJECT.status}
        userNickname={MOCK_PROJECT.user_nickname}
      />
      <ProjectInfoBox project={MOCK_PROJECT} />
      <div className='mt-[70px] flex items-center justify-center gap-[20px]'>
        <ApplyButton />
        <BookmarkButton projectId={MOCK_PROJECT.id} initialBookmarked={false} />
      </div>
    </>
  );
}
