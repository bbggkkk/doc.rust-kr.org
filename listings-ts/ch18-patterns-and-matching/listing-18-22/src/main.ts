// _ 단독 사용은 값을 바인딩하지 않음 — 소유권 이동 없음
const s: string | null = "Hello!";

if (s !== null) {
  // _ 는 값을 바인딩하지 않음 — s의 소유권 유지
  console.log("found a string");
}

console.log(s); // 정상 작동
