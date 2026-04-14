// Rust: 불변 변수를 가변으로 빌릴 수 없음
// JS: const는 재할당 불가이지만, 객체 내부는 변경 가능 (Object.freeze 제외)
const x = 5;
// x = 6; // JS에서도 const 재할당은 에러!

// 하지만 JS 객체는 const여도 내부 변경 가능 (Rust와 다름)
const obj = { value: 5 };
obj.value = 6; // JS에서는 OK! Rust에서는 불변 참조로는 불가
