// Deref 트레이트: 역참조 연산자 커스터마이징
// JS에는 역참조 연산자(*)가 없으므로 이 개념은 존재하지 않습니다.
//
// Rust에서는 *y로 참조자를 따라가 값을 얻습니다:
//   let x = 5;
//   let y = &x;
//   assert_eq!(5, *y);
//
// JS에서는 참조자/포인터 개념이 없습니다.
// 객체는 항상 참조로 전달되며, 원시 타입은 값으로 전달됩니다.

let x = 5;
let y = x; // 값 복사 (원시 타입)
console.assert(x === y); // true

const obj1 = { value: 5 };
const obj2 = obj1; // 같은 객체를 참조
obj2.value = 10;
console.log(obj1.value); // 10 — 같은 객체를 가리킴

// Rust의 역참조 강제 변환(deref coercion)도 JS에 없는 개념입니다.
// Rust: &String → &str 자동 변환
// JS: 타입 변환은 암묵적 형변환(coercion)으로 처리됩니다.
