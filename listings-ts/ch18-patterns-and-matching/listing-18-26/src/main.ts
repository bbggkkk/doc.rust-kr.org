const num: number | null = 4;

// 매치 가드 → if 조건 추가
if (num !== null && num % 2 === 0) {
  console.log(`The number ${num} is even`);
} else if (num !== null) {
  console.log(`The number ${num} is odd`);
}
// null인 경우는 아무 것도 하지 않음
