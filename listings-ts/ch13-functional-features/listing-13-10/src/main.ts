const v1 = [1, 2, 3];

// Rust: let v1_iter = v1.iter();
// JS 배열은 이미 이터러블(Iterable) — Symbol.iterator를 구현
const v1Iter = v1[Symbol.iterator]();
