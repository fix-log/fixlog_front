'use clinet';

import { followData } from './Types';

// import { useQuery } from '@tanstack/react-query';

export default function FetchMyFollowings(userid: number) {
  console.log('임시호출',userid)
  // const { data } = useQuery({
  //   queryKey: ['followings'],
  //   queryFn: () => fetch(`/api/user/${userid}/following`).then((res) => res.json()),
  // });
  return data;
}

// 더미
const data: followData = {
  following: [
    { user_id: 1, username: '아무개' },
    { user_id: 2, username: '홍길동' },
    { user_id: 3, username: '김철수' },
  ],
  total_count: 3,
};
