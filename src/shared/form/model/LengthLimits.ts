'use client';

interface lengthLimitsType {
  [key: string]: number;
}

export const lengthLimits: lengthLimitsType = {
  position: 3,
  career: 1,
  devLanguage: 5,
  stackAndTool: 8,
  designAndCollab: 0,
  devInterestField: 3,
  techTrendsInterest: 3,
  careerGrowth: 3,
};

// value: 0 = 최대 선택 제한 없음
// 각 드롭다운 옵션의 최대 선택 설정
