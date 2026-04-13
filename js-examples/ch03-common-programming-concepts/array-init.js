// Rust: let a: [i32; 5] = [1, 2, 3, 4, 5];
// TypeScript: const a: number[] = [1, 2, 3, 4, 5];
const a = [1, 2, 3, 4, 5]; // JS에서는 타입+길이 명시 불필요

// Rust: let a = [3; 5]; → [3, 3, 3, 3, 3]
const a2 = new Array(5).fill(3); // JS에서 동일한 값으로 채우기
