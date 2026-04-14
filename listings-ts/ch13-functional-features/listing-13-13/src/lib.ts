const v1 = [1, 2, 3];

// Rust: let total: i32 = v1_iter.sum();
// .iter().sum() → .reduce()로 합계 구하기
const total = v1.reduce((acc, x) => acc + x, 0);

console.assert(total === 6);
