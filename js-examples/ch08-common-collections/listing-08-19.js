// 예제 8-19: 문자열에 인덱싱 — JavaScript에서는 가능하지만 Rust에서는 불가

const s1 = "hello";
const h = s1[0]; // JavaScript에서는 "h"를 반환합니다

// Rust에서는 String에 인덱스로 접근할 수 없습니다
// UTF-8 인코딩에서 각 문자가 여러 바이트를 차지할 수 있기 때문입니다
// JavaScript도 서로게이트 쌍에서 비슷한 문제가 있습니다:
const emoji = "😀";
console.log(emoji[0]); // "\uD83D" — 완전한 문자가 아닙니다
