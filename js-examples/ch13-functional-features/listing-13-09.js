// JS 클로저도 외부 변수를 자유롭게 변경 가능 (Fn/FnMut/FnOnce 구분 없음)
const list = [
  { width: 10, height: 1 },
  { width: 3, height: 5 },
  { width: 7, height: 12 },
];

let numSortOperations = 0;
list.sort((a, b) => {
  numSortOperations++;
  return a.width - b.width;
});
console.log(list, `sorted in ${numSortOperations} operations`);
