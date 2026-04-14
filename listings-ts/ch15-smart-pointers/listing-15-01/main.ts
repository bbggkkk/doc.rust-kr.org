// JS/TS에서는 객체와 배열이 기본적으로 힙에 할당됩니다.
// Rust의 Box<T>는 명시적으로 힙 할당을 지정하지만,
// JS에서는 원시 타입 외의 모든 값이 이미 힙에 있습니다.

const b = 5; // JS에서 숫자는 스택(원시 타입)에 저장됨
console.log(`b = ${b}`);

// 객체로 감싸면 힙에 할당되는 효과 (Box와 유사)
const boxed = { value: 5 }; // 힙에 할당됨
console.log(`boxed = ${boxed.value}`);
