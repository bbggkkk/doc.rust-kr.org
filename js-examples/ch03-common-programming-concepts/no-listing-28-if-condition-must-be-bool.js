// Rust에서는 if 조건에 bool이 아닌 값을 넣으면 컴파일 에러가 발생합니다.
// JS에서는 모든 값이 truthy/falsy로 평가되므로, 숫자를 직접 사용할 수 있습니다.
const number = 3;
if (number) {
  // JS에서는 동작합니다: 0이 아닌 숫자는 truthy
  console.log("number was something other than zero");
}
// Rust는 명시적인 bool 타입을 요구하여 의도를 명확히 합니다.
