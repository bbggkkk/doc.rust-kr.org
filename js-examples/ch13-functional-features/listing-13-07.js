// Rust의 sort_by_key(|r| r.width) → JS의 sort() 비교 함수
const list = [
  { width: 10, height: 1 },
  { width: 3, height: 5 },
  { width: 7, height: 12 },
];

// JS sort()는 비교 함수를 받음 (Rust의 sort_by_key보다 약간 장황)
list.sort((a, b) => a.width - b.width);
console.log(list);
// [{ width: 3, ... }, { width: 7, ... }, { width: 10, ... }]
