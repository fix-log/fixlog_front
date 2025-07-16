import z from 'zod';

export default function preprocessArrayFormField(text: string) {
  return z.preprocess(
    (val) => (val === undefined ? [] : val) || (val === false ? [] : val),
    z.array(z.string()).min(1, text)
  );
}

// 스키마 내 z.preprocess를 사용하는 리스트 인풋 전용 (드롭다운 등)
