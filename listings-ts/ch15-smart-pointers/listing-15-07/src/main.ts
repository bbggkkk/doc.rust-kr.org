// Box<T>를 참조자처럼 사용 - JS에서는 래핑 불필요
// Rust: Box::new(x)로 힙 할당 후 *y로 역참조
// JS: 그냥 값을 사용하면 됨 (힙 할당이 자동)
const x = 5;
const y = x; // Box::new(x)에 해당하지만, JS에서는 그냥 복사

console.assert(5 === x);
console.assert(5 === y); // Rust의 *y에 해당 - JS에서는 역참조 불필요
