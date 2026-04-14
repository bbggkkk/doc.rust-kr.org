const v = [1, 2, 3, 4, 5, 6];

// Rust의 split_at_mut → 슬라이스를 두 부분으로 나눔
// TS의 Array에서는 slice로 유사하게 구현
const a = v.slice(0, 3); // [1, 2, 3]
const b = v.slice(3);    // [4, 5, 6]

console.assert(JSON.stringify(a) === JSON.stringify([1, 2, 3]));
console.assert(JSON.stringify(b) === JSON.stringify([4, 5, 6]));
