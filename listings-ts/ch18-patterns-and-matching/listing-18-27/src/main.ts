const x: number | null = 5; // Some(5)
const y = 10;

// 매치 가드로 외부 변수와 비교
if (x === null) {
  // None
} else if (x === 50) {
  console.log("Got 50");
} else if (x === y) {
  // 매치 가드 if n == y → 외부 y와 비교
  console.log(`Matched, n = ${x}`);
} else {
  console.log(`Default case, x = ${x}`);
}

console.log(`at the end: x = ${x}, y = ${y}`);
