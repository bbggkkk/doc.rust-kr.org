// Rust에서는 if let에 반박 불가능한 패턴을 사용하면 경고가 납니다.
// JS에서는 이런 구분이 없습니다.

const x = 5;
// 단순히 let으로 충분한 곳에 if를 쓰는 것은 불필요합니다
if (true) {
  console.log(x);
}
