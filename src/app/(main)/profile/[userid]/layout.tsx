import { userValueType } from '@/entities/profile/Types';
import UserHydration from '@/entities/profile/UserHydration';
import { useMediaQuery } from '@/shared/hooks/useMediaQuery';
import UserInfo from '@/widgets/profile/UserInfo';
import { cookies } from 'next/headers';
import { notFound } from 'next/navigation';
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

  // 더미 나중에 api로 변경 (유저정보)
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

  if (!response) notFound(); // api 호출 실패 시 404 페이지

  return (
    <div className='lg:border-gray4 lg:mt-[47px] lg:mb-[62px] lg:h-[1053px] lg:w-[865px] lg:overflow-hidden lg:rounded-[5px] lg:border'>
      <UserHydration userData={response} />
      <UserInfo>{children}</UserInfo>
    </div>
  );
}
