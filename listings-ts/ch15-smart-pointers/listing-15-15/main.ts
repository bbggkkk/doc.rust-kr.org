// JS에서는 수동으로 소멸자를 호출하는 개념이 없습니다.
// Rust에서도 drop()을 직접 호출할 수 없습니다 (이중 해제 방지).

class CustomSmartPointer {
  data: string;
  constructor(data: string) { this.data = data; }
}

function main() {
  const c = new CustomSmartPointer("some data");
  console.log("CustomSmartPointer created.");

  // Rust: c.drop() → 컴파일 에러!
  // JS: 소멸자 개념 자체가 없음 - GC가 알아서 처리
  // c.drop(); // 이런 메서드는 존재하지 않음

  console.log("CustomSmartPointer dropped before the end of main.");
}

main();
