export interface Member {
  id: string;
  name: string;
  email: string;
  profileImage?: string;
  position: string[];
  role: '관리자' | '부관리자' | '팀원';
  permission: string;
}

export const dummyMembers: Member[] = [
  {
    id: '1',
    name: '여운',
    email: 'qwerqwer@asdfdfsd.com',
    profileImage: '/avatar2',
    position: ['Planner', 'FrontEnd', 'Designer'],
    role: '관리자',
    permission: '모든 권한',
  },
  {
    id: '2',
    name: '나기',
    email: 'qwerqwer@asdfdfsd.com',
    profileImage: '/avatar2',
    position: [],
    role: '부관리자',
    permission: '모든 권한',
  },
  {
    id: '3',
    name: '수정',
    email: 'qwerqwer@asdfdfsd.com',
    profileImage: '/avatar2',
    position: [],
    role: '팀원',
    permission: '일정 추가, 삭제 가능',
  },
  {
    id: '4',
    name: '이운',
    email: 'qwerqwer@asdfdfsd.com',
    profileImage: '/avatar2',
    position: [],
    role: '팀원',
    permission: '일정 추가, 삭제 가능',
  },
];
