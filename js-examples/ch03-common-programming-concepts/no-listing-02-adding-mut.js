// Rust: let mut x = 5; → JS: let은 기본적으로 재할당 가능 (mut 불필요)
let x = 5;
console.log(`The value of x is: ${x}`);
x = 6;
console.log(`The value of x is: ${x}`);
// JS에서 재할당을 막으려면 const를 사용합니다
// const y = 5;
// y = 6; // TypeError: Assignment to constant variable.
