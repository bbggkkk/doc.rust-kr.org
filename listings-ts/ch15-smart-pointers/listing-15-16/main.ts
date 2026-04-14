// JS에서는 GC가 메모리를 관리하므로 명시적으로 값을 버릴 필요가 없습니다.
// 참조를 null로 설정하면 GC가 수집할 수 있게 됩니다.
// Rust의 std::mem::drop()과 유사한 패턴입니다.

class CustomSmartPointer {
  data: string;
  constructor(data: string) { this.data = data; }

  // 정리 로직을 명시적으로 호출하는 패턴
  dispose(): void {
    console.log(`Dropping CustomSmartPointer with data \`${this.data}\`!`);
  }
}

function main() {
  let c: CustomSmartPointer | null = new CustomSmartPointer("some data");
  console.log("CustomSmartPointer created.");

  // Rust: drop(c) → 소유권을 가져가서 즉시 해제
  // JS: dispose 패턴으로 정리 로직 실행 + 참조 해제
  c.dispose();
  c = null; // GC가 수집할 수 있도록 참조 해제

  console.log("CustomSmartPointer dropped before the end of main.");
}

main();
