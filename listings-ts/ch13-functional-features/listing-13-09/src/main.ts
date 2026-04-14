interface Rectangle {
  width: number;
  height: number;
}

let list: Rectangle[] = [
  { width: 10, height: 1 },
  { width: 3, height: 5 },
  { width: 7, height: 12 },
];

// FnMut: 캡처한 값을 변경하지만 밖으로 이동시키지는 않음
// JS에서는 외부 변수를 자유롭게 변경 가능 (빌림 규칙 없음)
let numSortOperations = 0;
list.sort((a, b) => {
  numSortOperations += 1;
  return a.width - b.width;
});
console.log(list, `sorted in ${numSortOperations} operations`);
