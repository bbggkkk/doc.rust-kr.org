// Rust의 iter().sum() → JS의 reduce()
const v1 = [1, 2, 3];

const total = v1.reduce((acc, x) => acc + x, 0);

console.log(total); // 6
