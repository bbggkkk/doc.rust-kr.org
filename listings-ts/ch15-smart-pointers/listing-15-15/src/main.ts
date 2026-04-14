// Rust: drop() 메서드 직접 호출 불가 (이중 해제 방지)
// JS에서는 GC가 메모리를 관리하므로 이런 제한이 없음
class CustomSmartPointer {
  constructor(public data: string) {}
  drop(): void {
    console.log(`Dropping CustomSmartPointer with data \`${this.data}\`!`);
  }
}

const c = new CustomSmartPointer("some data");
console.log("CustomSmartPointer created.");
c.drop(); // JS에서는 호출 가능하지만, Rust에서는 컴파일 에러!
// Rust는 스코프 끝에서 자동 drop이 또 호출되어 이중 해제가 되므로 금지
console.log("CustomSmartPointer dropped before the end of main.");
