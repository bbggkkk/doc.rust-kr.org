// Rust에서는 mut 변수라도 타입을 변경할 수 없어 컴파일 에러가 발생합니다.
// JS에서는 타입이 동적이므로 변수에 다른 타입의 값을 자유롭게 할당할 수 있습니다.
let spaces = "   ";
spaces = spaces.length; // JS에서는 문자열에서 숫자로 변경 가능
console.log(spaces); // 3
// Rust는 이런 타입 변경을 컴파일 타임에 방지합니다.
