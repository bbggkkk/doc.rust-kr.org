// Rust의 iter().next() → JS의 이터레이터 .next()
const v1 = [1, 2, 3];
const v1Iter = v1[Symbol.iterator]();

console.log(v1Iter.next()); // { value: 1, done: false } — Rust의 Some(&1)
console.log(v1Iter.next()); // { value: 2, done: false } — Rust의 Some(&2)
console.log(v1Iter.next()); // { value: 3, done: false } — Rust의 Some(&3)
console.log(v1Iter.next()); // { value: undefined, done: true } — Rust의 None
