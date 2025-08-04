interface followUser {
  user_id: number;
  username: string;
}

export interface followData {
  following: followUser[];
  total_count: number;
}