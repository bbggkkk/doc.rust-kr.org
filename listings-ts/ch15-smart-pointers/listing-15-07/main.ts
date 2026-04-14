// JS에서는 Box도 역참조도 필요 없습니다.
// 객체로 감싸도 값에 접근할 때 자동으로 처리됩니다.

const x = 5;
const y = { value: x }; // Box::new(x)와 유사

console.assert(5 === x);
console.assert(5 === y.value); // Rust의 *y 대신 .value로 접근
