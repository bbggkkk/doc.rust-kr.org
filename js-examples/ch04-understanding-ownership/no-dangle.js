// JS에서는 가비지 컬렉터가 메모리를 관리하므로
// 댕글링 참조가 발생하지 않습니다.

function noDangle() {
  const s = "hello";
  return s; // GC가 관리하므로 안전하게 반환
}

const str = noDangle();
console.log(str); // "hello"
