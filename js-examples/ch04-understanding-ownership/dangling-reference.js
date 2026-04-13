// Rust에서는 댕글링 참조를 만들면 컴파일 에러가 발생합니다.
// JS에서는 가비지 컬렉터 덕분에 댕글링 참조가 발생하지 않습니다.
function dangle() {
  const s = "hello";
  return s; // JS에서는 값이 복사되어 반환됨
}

const result = dangle();
console.log(result); // "hello" - 정상 동작
// Rust는 컴파일 타임에 댕글링 참조를 감지하여 방지합니다.
