interface Rectangle {
  width: number;
  height: number;
}

let list: Rectangle[] = [
  { width: 10, height: 1 },
  { width: 3, height: 5 },
  { width: 7, height: 12 },
];

const sortOperations: string[] = [];
const value = "by key called";

// Rust: FnOnce만 구현 — value를 클로저 밖으로 이동시키므로 한 번만 호출 가능
// JS에서는 이런 제약이 없으므로 동작하지만, Rust에서는 컴파일 에러!
// sort_by_key는 FnMut를 요구하므로 value를 이동시키는 클로저 사용 불가
list.sort((a, b) => {
  sortOperations.push(value); // Rust에서는 소유권 이동 → 에러
  return a.width - b.width;
});
console.log(list);
