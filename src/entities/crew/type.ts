export interface CrewProject {
  id: number;
  title: string;
  user_nickname: string;
  deadline: string;
  status: 'recruiting' | 'closed';
  project_positions: { position_name: string }[];
  project_skill_tools: { skill_tool_name: string }[];
}

export interface ProjectDetail {
  id: number;
  user: number;
  user_nickname: string;
  title: string;
  deadline: string;
  start_date: string;
  end_date: string;
  is_estimated_period: string;
  description: string;
  count: number;
  status: 'recruiting' | 'closed'; // 또는 string
  project_positions: {
    position: number;
    position_name: string;
    count: number;
  }[];
  project_languages: {
    language: number;
    language_name: string;
  }[];
  project_skill_tools: {
    skill_tool: number;
    skill_tool_name: string;
  }[];
  created_at: string;
  updated_at: string;
}
