// JS에서는 const로 선언해도 객체의 프로퍼티는 변경 가능합니다.
// Rust의 불변/가변 대여 규칙은 JS에 존재하지 않습니다.

const x = 5;
// x = 6; // const이므로 재할당 불가 (Rust의 let과 유사)

let y = 5;
y = 6; // let이므로 재할당 가능 (Rust의 let mut과 유사)

// 하지만 JS의 const 객체는 내부 변경이 가능!
const obj = { value: 5 };
obj.value = 6; // OK! (Rust에서는 &mut 없이 불가)
