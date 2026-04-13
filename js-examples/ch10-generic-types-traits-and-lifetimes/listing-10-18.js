// Rust: 데이터의 라이프타임 'b가 참조자의 라이프타임 'a보다 길어서 유효합니다.
// JS에서는 GC가 참조되는 동안 값을 유지하므로 항상 안전합니다.
const x = 5;
const r = x;
console.log(`r: ${r}`);
