export interface userValueType {
  viewUserId: number;
  isMe: boolean;
  name: string;
  nickname: string;
  email: string;
  password: string;
  password_check: string;
  phone_number: string;
  birth: string;
  position: string[];
  experience: string[];
  language: string[];
  tech: string[];
  coop_tool: string[];
  interest_field: string[];
  interest_trend: string[];
  career: string;
  portfolio: string;
  ref_link: string;
  level: number;
}

interface followUser {
  user_id: number;
  username: string;
}

export interface followType {
  following: followUser[];
  total_count: number;
}
