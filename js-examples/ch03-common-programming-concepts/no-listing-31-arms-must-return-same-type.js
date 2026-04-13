// Rust에서는 if 표현식의 각 갈래가 같은 타입을 반환해야 합니다.
// 다른 타입을 반환하면 컴파일 에러가 발생합니다.
// JS에서는 타입이 동적이므로, 다른 타입을 자유롭게 반환할 수 있습니다.
const condition = true;
const number = condition ? 5 : "six"; // JS에서는 동작합니다
console.log(number); // 5
// Rust는 이런 타입 불일치를 컴파일 타임에 방지합니다.
