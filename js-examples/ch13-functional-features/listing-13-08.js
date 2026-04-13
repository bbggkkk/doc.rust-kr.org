// FnOnce 클로저를 sort에 사용할 수 없는 예시
// Rust에서는 환경에서 값을 이동시키는 클로저는 FnOnce만 구현하며,
// sort_by_key처럼 여러 번 호출하는 함수에 사용할 수 없습니다.
// JS에서는 이런 제약이 없어 아래처럼 자유롭게 작성할 수 있습니다.

const list = [
  { width: 10, height: 1 },
  { width: 3, height: 5 },
  { width: 7, height: 12 },
];

const sortOperations = [];
let value = "hello";

// JS에서는 value를 자유롭게 사용할 수 있지만
// Rust에서는 클로저가 value의 소유권을 이동시키므로
// sort_by_key에서 여러 번 호출할 수 없어 컴파일 에러가 발생합니다.
list.sort((a, b) => {
  sortOperations.push(value); // JS에서는 문제 없음
  return a.width - b.width;
});

console.log(list);
