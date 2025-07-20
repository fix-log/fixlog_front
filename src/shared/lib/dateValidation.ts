import { isValid, parseISO } from 'date-fns';

// TODO: 다른 곳에 타입 모아줘야 하나?
export type DateValidationResult =
  | { isValid: true; date: Date }
  | { isValid: false; error: string };

export function validateDateParams(year: string, month: string, day: string): DateValidationResult {
  // 1. 숫자 변환 검증
  const yearNum = parseInt(year);
  const monthNum = parseInt(month);
  const dayNum = parseInt(day);

  if (isNaN(yearNum) || isNaN(monthNum) || isNaN(dayNum)) {
    return {
      isValid: false,
      error: 'Invalid date parameters',
    };
  }

  // 2. 합리적인 범위 검증
  if (yearNum < 1950 || yearNum > 2100) {
    return {
      isValid: false,
      error: 'Year out of range',
    };
  }

  if (monthNum < 1 || monthNum > 12) {
    return {
      isValid: false,
      error: 'Month out of range',
    };
  }

  if (dayNum < 1 || dayNum > 31) {
    return {
      isValid: false,
      error: 'Day out of range',
    };
  }

  // 3. 실제 날짜 유효성 검증
  const date = new Date(yearNum, monthNum - 1, dayNum);

  if (!isValid(date)) {
    return {
      isValid: false,
      error: 'Invalid date',
    };
  }

  // 4. 입력된 값과 실제 날짜가 일치하는지 검증
  if (
    date.getFullYear() !== yearNum ||
    date.getMonth() !== monthNum - 1 ||
    date.getDate() !== dayNum
  ) {
    return {
      isValid: false,
      error: 'Date mismatch',
    };
  }

  return {
    isValid: true,
    date,
  };
}
