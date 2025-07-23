export interface CrewProject {
  id: number;
  title: string;
  user_nickname: string;
  deadline: string;
  status: 'recruiting' | 'closed';
  project_positions: { position_name: string }[];
  project_skill_tools: { skill_tool_name: string }[];
}
