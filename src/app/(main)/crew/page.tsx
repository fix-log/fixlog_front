import { CrewProject } from '@/entities/crew/type';
import CrewListSection from '@/features/crew/CrewListSection';
import { Suspense } from 'react';

const crewData: CrewProject[] = [
  {
    id: 1,
    title: '[디자이너 모집] 쉐이칸샹 쉐이칸 샹',
    user_nickname: '중국 병맛 밈',
    deadline: '2025-06-13T10:00:00Z',
    status: 'recruiting',
    project_positions: [{ position_name: 'Designer' }],
    project_skill_tools: [
      { skill_tool_name: 'Figma' },
      { skill_tool_name: 'Illustrator' },
      { skill_tool_name: 'Notion' },
    ],
  },
  {
    id: 2,
    title: '이건 첫 번째 레슨 좋은건 너만 알기',
    user_nickname: '유노윤호',
    deadline: '2025-06-13T08:00:00Z',
    status: 'closed',
    project_positions: [{ position_name: 'BackEnd' }],
    project_skill_tools: [
      { skill_tool_name: 'React' },
      { skill_tool_name: 'TypeScript' },
      { skill_tool_name: 'Notion' },
    ],
  },
  {
    id: 3,
    title: '[디자이너 모집] 쉐이칸샹 쉐이칸 샹',
    user_nickname: '중국 병맛 밈',
    deadline: '2025-06-13T10:00:00Z',
    status: 'recruiting',
    project_positions: [{ position_name: 'Designer' }],
    project_skill_tools: [
      { skill_tool_name: 'Figma' },
      { skill_tool_name: 'Illustrator' },
      { skill_tool_name: 'Notion' },
    ],
  },
  {
    id: 4,
    title: '이건 첫 번째 레슨 좋은건 너만 알기',
    user_nickname: '유노윤호',
    deadline: '2025-06-13T08:00:00Z',
    status: 'closed',
    project_positions: [{ position_name: 'BackEnd' }],
    project_skill_tools: [
      { skill_tool_name: 'React' },
      { skill_tool_name: 'TypeScript' },
      { skill_tool_name: 'Notion' },
    ],
  },
  {
    id: 5,
    title: '[디자이너 모집] 쉐이칸샹 쉐이칸 샹',
    user_nickname: '중국 병맛 밈',
    deadline: '2025-06-13T10:00:00Z',
    status: 'recruiting',
    project_positions: [{ position_name: 'Designer' }],
    project_skill_tools: [
      { skill_tool_name: 'Figma' },
      { skill_tool_name: 'Illustrator' },
      { skill_tool_name: 'Notion' },
    ],
  },
  {
    id: 6,
    title: '이건 첫 번째 레슨 좋은건 너만 알기',
    user_nickname: '유노윤호',
    deadline: '2025-06-13T08:00:00Z',
    status: 'closed',
    project_positions: [{ position_name: 'BackEnd' }],
    project_skill_tools: [
      { skill_tool_name: 'React' },
      { skill_tool_name: 'TypeScript' },
      { skill_tool_name: 'Notion' },
    ],
  },
  {
    id: 7,
    title: '[디자이너 모집] 쉐이칸샹 쉐이칸 샹',
    user_nickname: '중국 병맛 밈',
    deadline: '2025-06-13T10:00:00Z',
    status: 'recruiting',
    project_positions: [{ position_name: 'Designer' }],
    project_skill_tools: [
      { skill_tool_name: 'Figma' },
      { skill_tool_name: 'Illustrator' },
      { skill_tool_name: 'Notion' },
    ],
  },
  {
    id: 8,
    title: '이건 첫 번째 레슨 좋은건 너만 알기',
    user_nickname: '유노윤호',
    deadline: '2025-06-13T08:00:00Z',
    status: 'closed',
    project_positions: [{ position_name: 'BackEnd' }, { position_name: 'Frontend' }],
    project_skill_tools: [
      { skill_tool_name: 'React' },
      { skill_tool_name: 'TypeScript' },
      { skill_tool_name: 'Notion' },
    ],
  },
];

export default function CrewPage() {
  return (
    <Suspense fallback={<div>로딩 중...</div>}>
      <CrewListSection crew={crewData} />
    </Suspense>
  );
}
