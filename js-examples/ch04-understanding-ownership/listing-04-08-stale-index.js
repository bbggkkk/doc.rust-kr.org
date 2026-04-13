// Rust에서는 슬라이스 없이 인덱스만 반환하면 데이터와 동기화가 안 될 수 있습니다.
// JS에서도 같은 문제가 발생합니다.
function firstWord(s) {
  const idx = s.indexOf(" ");
  return idx === -1 ? s.length : idx;
}

let s = "hello world";
const word = firstWord(s); // 5
s = ""; // 문자열이 비워짐
// word는 여전히 5이지만, s는 빈 문자열 — 인덱스가 쓸모없어짐
