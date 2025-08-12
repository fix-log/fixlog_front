// 임시 더미 데이터
// 크루 모집 api 모르겟서요

export interface dummyType {
  id: number;
  모집현황: boolean;
  모집날짜: string;
  제목: string;
  태그: string[];
  포지션: string;
}

export const dummy = {
  // 내 크루모집
  myCrew: [
    {
      id: 1,
      모집현황: true,
      모집날짜: '2025.06.13',
      제목: '[내크루모집] 감성 블로그 기반 커뮤니티 플랫폼',
      태그: ['Figma', 'Illustrator', 'Notion'],
      포지션: 'Desiginer',
    },
    {
      id: 2,
      모집현황: true,
      모집날짜: '2025.06.13',
      제목: '[내크루모집] 감성 블로그 기반 커뮤니티 플랫폼',
      태그: ['Figma', 'Illustrator', 'Notion'],
      포지션: 'Desiginer',
    },
  ],
  // 지원한 크루모집
  appliedCrew: [
    {
      id: 3,
      모집현황: true,
      모집날짜: '2025.06.13',
      제목: '[지원크루모집] 감성 블로그 기반 커뮤니티 플랫폼',
      태그: ['Figma', 'Illustrator', 'Notion'],
      포지션: 'Desiginer',
    },
    {
      id: 4,
      모집현황: true,
      모집날짜: '2025.06.13',
      제목: '[지원크루모집] 감성 블로그 기반 커뮤니티 플랫폼',
      태그: ['Figma', 'Illustrator', 'Notion'],
      포지션: 'Desiginer',
    },
    {
      id: 5,
      모집현황: true,
      모집날짜: '2025.06.13',
      제목: '[지원크루모집] 감성 블로그 기반 커뮤니티 플랫폼',
      태그: ['Figma', 'Illustrator', 'Notion'],
      포지션: 'Desiginer',
    },
  ],
  // 즐겨찾기한 크루모집
  favoritedCrew: [
    {
      id: 6,
      모집현황: true,
      모집날짜: '2025.06.13',
      제목: '[즐겨찾기크루모집] 감성 블로그 기반 커뮤니티 플랫폼',
      태그: ['Figma', 'Illustrator', 'Notion'],
      포지션: 'Desiginer',
    },
    {
      id: 7,
      모집현황: true,
      모집날짜: '2025.06.13',
      제목: '[즐겨찾기크루모집] 감성 블로그 기반 커뮤니티 플랫폼',
      태그: ['Figma', 'Illustrator', 'Notion'],
      포지션: 'Desiginer',
    },
    {
      id: 8,
      모집현황: true,
      모집날짜: '2025.06.13',
      제목: '[즐겨찾기크루모집] 감성 블로그 기반 커뮤니티 플랫폼',
      태그: ['Figma', 'Illustrator', 'Notion'],
      포지션: 'Desiginer',
    },
    {
      id: 9,
      모집현황: true,
      모집날짜: '2025.06.13',
      제목: '[즐겨찾기크루모집] 감성 블로그 기반 커뮤니티 플랫폼',
      태그: ['Figma', 'Illustrator', 'Notion'],
      포지션: 'Desiginer',
    },
  ],
  // 생성한 워크룸
  createdWorkroom: [
    {
      id: 10,
      모집현황: false,
      모집시작날짜: '2025.06.13',
      모집종료날짜: '2025.07.13',
      제목: '[생성한워크룸] 감성 블로그 기반 커뮤니티 플랫폼',
      소개글: '25자 정도(띄어쓰기 포함) 소개글을쓸 수 있어요',
      포지션: 'Desiginer',
    },
    {
      id: 11,
      모집현황: true,
      모집시작날짜: '2025.06.13',
      모집종료날짜: '2025.07.13',
      제목: '[생성한워크룸] 감성 블로그 기반 커뮤니티 플랫폼',
      소개글: '25자 정도(띄어쓰기 포함) 소개글을쓸 수 있어요',
      포지션: 'Desiginer',
    },
    {
      id: 12,
      모집현황: false,
      모집시작날짜: '2025.06.13',
      모집종료날짜: '2025.07.13',
      제목: '[생성한워크룸] 감성 블로그 기반 커뮤니티 플랫폼',
      소개글: '25자 정도(띄어쓰기 포함) 소개글을쓸 수 있어요',
      포지션: 'Desiginer',
    },
  ],
  // 참여한 워크룸
  joinedWorkroom: [],
};
