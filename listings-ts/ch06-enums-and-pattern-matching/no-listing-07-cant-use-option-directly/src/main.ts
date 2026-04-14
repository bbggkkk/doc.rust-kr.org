const x: number = 5;
const y: number | null = 5; // Option<i8> → number | null

// TS에서도 strict null check 시 에러 발생:
// 'number | null' 타입을 'number'에 더할 수 없음
// const sum = x + y; // Error!
// 올바른 방법: null 체크 후 사용
const sum = y !== null ? x + y : x;
