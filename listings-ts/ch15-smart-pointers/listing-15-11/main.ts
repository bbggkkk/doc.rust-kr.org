// JS에서는 타입 강제 변환(coercion)이 자동으로 일어납니다.
// Rust의 역참조 강제 변환과 달리 JS는 toString() 등을 자동 호출합니다.

function hello(name: string): void {
  console.log(`Hello, ${name}!`);
}
