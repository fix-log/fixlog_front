interface lengthLimitsType {
  [key: string]: number;
}

export const lengthLimits: lengthLimitsType = {
  position: 3,
  career: 1,
  devLanguage: 5,
  stackAndTool: 8,
  designAndCollab: 0,
};

// value: 0 = 최대 선택 제한 없음