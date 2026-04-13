// JavaScript로 보기 — unsafe는 JS에 없는 개념입니다
// Rust: unsafe 블록 내에서 원시 포인터를 역참조
// JavaScript에는 포인터 역참조가 없습니다.

let num = 5;

// JavaScript에서는 변수를 객체로 감싸서 "참조"를 흉내냅니다
const ref1 = { value: num };
const ref2 = { value: num };

console.log("ref1 is:", ref1.value);
console.log("ref2 is:", ref2.value);
