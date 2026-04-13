// Rust의 const는 JS의 const와 비슷하지만 차이점이 있습니다:
// - Rust const: 컴파일 타임에 값이 결정, 타입 명시 필수, 전역 사용 가능
// - JS const: 런타임에 값이 결정, 타입 명시 불필요, 객체 내부는 변경 가능
const THREE_HOURS_IN_SECONDS = 60 * 60 * 3;
// JS의 const는 재할당만 막을 뿐, 객체 내부 변경은 허용합니다
// const obj = { a: 1 }; obj.a = 2; // OK ✅
// Rust의 const는 진정한 불변입니다
