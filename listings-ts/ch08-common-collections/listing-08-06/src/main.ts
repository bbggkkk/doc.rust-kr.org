// [does_not_compile] Rust의 대여 규칙: 불변 참조가 있는 동안 가변 수정 불가
// TypeScript에서는 이런 제약이 없음 — 자유롭게 수정 가능
const v = [1, 2, 3, 4, 5];

const first = v[0]; // 값 복사 (참조가 아님)

v.push(6); // TypeScript에서는 문제없음

console.log(`The first element is: ${first}`);
// Rust에서는 불변 참조(first)가 있는 동안 push(가변 수정)를 할 수 없음
// 벡터가 재할당되면 기존 참조가 무효화될 수 있기 때문
