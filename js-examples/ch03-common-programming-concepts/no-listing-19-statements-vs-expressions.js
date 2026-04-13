// Rust에서는 let x = (let y = 6); 이 컴파일 에러입니다.
// 구문(statement)은 값을 반환하지 않기 때문입니다.
// JS에서는 할당이 값을 반환하므로 비슷한 코드가 동작합니다.
let y;
const x = (y = 6); // JS에서는 동작합니다: x는 6
console.log(x); // 6
// Rust는 이런 패턴을 컴파일 타임에 방지합니다.
