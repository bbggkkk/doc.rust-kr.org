// 불변값의 가변 대여 — Rust에서는 금지, JS에서는 허용
// Rust: let x = 5; let y = &mut x; — 컴파일 에러!
// JS에서는 const 변수도 객체 내부를 변경할 수 있습니다.

// 원시 타입은 재할당 불가
const x = 5;
// x = 6; // TypeError: Assignment to constant variable

// 하지만 객체 내부는 변경 가능
const obj = { value: 5 };
obj.value = 6; // OK! const는 재할당만 막음

// Object.freeze()로 진짜 불변 만들기
const frozen = Object.freeze({ value: 5 });
// frozen.value = 6; // strict mode에서 TypeError

// Rust에서는 불변 변수의 가변 참조를 만드는 것 자체가 컴파일 에러입니다.
// JS에서는 이런 대여 규칙이 없어 자유롭게 변경 가능합니다.
