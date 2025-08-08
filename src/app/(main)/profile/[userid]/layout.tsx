import { userValueType } from '@/entities/userInfo/Types';
import UserHydration from '@/entities/userInfo/UserHydration';
import UserInfo from '@/widgets/userInfo/UserInfo';
import { cookies } from 'next/headers';
import { ReactNode } from 'react';

interface ProfilePageProps {
  params: Promise<{ userid: string }>;
  children: ReactNode;
}

export default async function ProfilePage({ params, children }: ProfilePageProps) {
  const userParams = await params;
  const viewUserId = Number(userParams.userid);
  const cookie = await cookies();
  const userId = cookie.get('userId')?.value;
  const isMe = viewUserId === Number(userId);

  // 더미
  const response: userValueType = {
    viewUserId: viewUserId,
    isMe: isMe,
    level: 1,
    name: '이희정',
    nickname: '이운',
    email: 'test@fixlog.com',
    password: '123456!A',
    password_check: '123456!A',
    phone_number: '010-1111-2222',
    birth: '001231',
    position: ['FrontEnd'],
    experience: ['개발 공부 / 학습', '포트폴리오 만들기', '커뮤니티 활동'],
    language: ['TypeScript', 'JavaScript'],
    tech: ['react', 'nextjs', 'GitHub', 'Git'],
    coop_tool: ['Figma', 'Notion'],
    interest_field: ['프론트엔드', '안드로이드', '게임 개발'],
    interest_trend: ['사이드 프로젝트', '스타트업', '코드 리뷰'],
    career: '신입',
    portfolio: '내_포트폴리오_파일.pdf',
    ref_link: 'https://fixlog.com',
  };

  return (
    <div className='border-gray4 mt-[47px] mb-[62px] h-[1053px] w-[865px] overflow-hidden rounded-[5px] border'>
      <UserHydration userData={response} />
      <UserInfo children={children} />
    </div>
  );
}
