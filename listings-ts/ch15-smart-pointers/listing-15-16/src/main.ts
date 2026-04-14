// Rust: std::mem::drop()으로 값을 일찍 버리기
// JS에서는 변수에 null 할당으로 GC 대상으로 만드는 것이 유사
class CustomSmartPointer {
  constructor(public data: string) {}
  drop(): void {
    console.log(`Dropping CustomSmartPointer with data \`${this.data}\`!`);
  }
}

let c: CustomSmartPointer | null = new CustomSmartPointer("some data");
console.log("CustomSmartPointer created.");
c.drop();      // 정리 로직 수동 호출
c = null;      // JS: 참조 제거로 GC 대상화 (Rust의 drop(c)에 해당)
console.log("CustomSmartPointer dropped before the end of main.");
