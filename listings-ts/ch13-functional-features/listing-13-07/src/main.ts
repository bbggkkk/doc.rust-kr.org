interface Rectangle {
  width: number;
  height: number;
}

let list: Rectangle[] = [
  { width: 10, height: 1 },
  { width: 3, height: 5 },
  { width: 7, height: 12 },
];

// Rust: list.sort_by_key(|r| r.width)
// |r| r.width 클로저 → (r) => r.width
// Fn 트레이트: 이 클로저는 캡처한 값을 변경하지 않으므로 Fn에 해당
list.sort((a, b) => a.width - b.width);
console.log(list);
