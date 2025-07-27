interface user {
  user_id: number;
  username: string;
}

export interface followData {
  following: user[];
  total_count: number;
}