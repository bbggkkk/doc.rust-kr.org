// _s는 여전히 값을 바인딩 (소유권 이동) — Rust에서 에러
const s: string | null = "Hello!";

if (s !== null) {
  const _s = s; // _s에 바인딩됨 — Rust에서는 소유권이 이동함
  console.log("found a string");
}

// Rust에서는 s가 이미 이동했으므로 여기서 사용 불가
// JS/TS에서는 참조 복사이므로 문제없음
console.log(s);
