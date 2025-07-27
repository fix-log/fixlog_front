'use clinet';

import { followData } from './Types';

// import { useQuery } from '@tanstack/react-query';

export default function FetchMyFollowers(userid: number) {
  // const { data } = useQuery({
  //   queryKey: ['followers'],
  //   queryFn: () => fetch(`/api/user/${userid}/followers`).then((res) => res.json()),
  // });
  return data;
}

const data: followData = {
  following: [
    { user_id: 1, username: '아무개' },
    { user_id: 4, username: 'IllIIlIllII' },
    { user_id: 5, username: '너굴맨' },
    { user_id: 6, username: '고양이가 세상을 지배한다' },
    { user_id: 7, username: 'ab1222356' },
  ],
  total_count: 5,
};
