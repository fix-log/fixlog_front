'use client';

import PostCard from './PostCard';

export default function FixredPage() {
  // api 반환값
  // const respones = {
  //   id: 0,
  //   user: 'string',
  //   content: 'string',
  //   images: [
  //     {
  //       image_url: 'http://example.com',
  //     },
  //   ],
  //   like_count: 0,
  //   is_liked: 'string',
  //   comment_count: 0,
  //   read_permission: 'public',
  //   created_at: '2019-08-24T14:15:22Z',
  //   comments: [
  //     {
  //       id: 0,
  //       user: 'string',
  //       comment: 'string',
  //       created_at: '2019-08-24T14:15:22Z',
  //     },
  //   ],
  // };

  // 임시
  const responess = [
    {
      id: Date.now(),
      author: '슈가수가',
      content: '테스트',
      createdAt: new Date(),
      likes: 0,
      comments: 0,
      shares: 0,
    },
    {
      id: Date.now(),
      author: '슈가수가',
      content: '테스트',
      createdAt: new Date(),
      likes: 0,
      comments: 0,
      shares: 0,
    },
    {
      id: Date.now(),
      author: '슈가수가',
      content: '테스트',
      createdAt: new Date(),
      likes: 0,
      comments: 0,
      shares: 0,
    },
    {
      id: Date.now(),
      author: '슈가수가',
      content: '테스트',
      createdAt: new Date(),
      likes: 0,
      comments: 0,
      shares: 0,
    },
    {
      id: Date.now(),
      author: '슈가수가',
      content: '테스트',
      createdAt: new Date(),
      likes: 0,
      comments: 0,
      shares: 0,
    },
  ];

  // const dd = document.querySelector('')

  return (
    <div className='flex flex-col max-h-[675px] gap-3 overflow-y-auto p-[23px]'>
      <PostCard respones={responess} />
    </div>
  );
}
