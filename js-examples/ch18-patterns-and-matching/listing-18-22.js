// Rust의 _는 값을 바인딩하지 않아 소유권이 이동하지 않습니다.
// JS에서는 구조 분해 시 값을 무시하려면 변수를 생략합니다.

const s = "Hello!";

if (s != null) {
  console.log("found a string");
}

console.log(s); // 문제없이 사용 가능
