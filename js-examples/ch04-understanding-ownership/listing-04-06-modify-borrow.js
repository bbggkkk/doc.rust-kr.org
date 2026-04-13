// Rust에서는 불변 참조자를 통해 값을 수정하면 컴파일 에러가 발생합니다.
// JS에서는 문자열이 원시 타입이라 수정 자체가 불가능하지만,
// 객체는 참조로 전달되어 자유롭게 수정할 수 있습니다.
function change(someString) {
  return someString + ", world"; // 새 문자열 반환
}

const s = "hello";
// s += ", world"; // const이므로 재할당 불가
const result = change(s);
console.log(result); // "hello, world"
// Rust는 빌린 값을 수정하는 것을 컴파일 타임에 방지합니다.
