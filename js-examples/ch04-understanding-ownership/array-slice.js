// Rust의 &a[1..3] → JS의 a.slice(1, 3)

const a = [1, 2, 3, 4, 5];

const sliced = a.slice(1, 3);

console.log(sliced);              // [2, 3]
console.log(JSON.stringify(sliced) === JSON.stringify([2, 3])); // true
