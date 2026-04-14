const x: number | null = 5; // Some(5)
const y = 10;

// match에서 변수 섀도잉 — TS에서는 블록 스코프의 변수 재선언
if (x === null) {
  // None 케이스
} else if (x === 50) {
  console.log("Got 50");
} else {
  // Some(y) — 새로운 y가 x의 내부 값에 바인딩됨
  const y = x; // 섀도잉된 y
  console.log(`Matched, y = ${y}`);
}

console.log(`at the end: x = ${x}, y = ${y}`);
