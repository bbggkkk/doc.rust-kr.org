// Rust Iterator 트레이트의 next() 메서드 → JS Iterator 프로토콜
const v1 = [1, 2, 3];
const v1Iter = v1[Symbol.iterator]();

// Rust: v1_iter.next() → Some(&1), Some(&2), Some(&3), None
// JS:   v1Iter.next()  → { value: 1, done: false }, ..., { done: true }
console.assert(v1Iter.next().value === 1);
console.assert(v1Iter.next().value === 2);
console.assert(v1Iter.next().value === 3);
console.assert(v1Iter.next().done === true); // None에 해당
