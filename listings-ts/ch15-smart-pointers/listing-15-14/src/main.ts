// Rust: Drop 트레이트 - 스코프 벗어날 때 자동 호출 (JS에는 없음, GC가 처리)
// JS에는 소멸자가 없으며, GC가 메모리를 자동 관리함
// FinalizationRegistry가 가장 가까운 대응이지만, 호출 시점이 보장되지 않음
class CustomSmartPointer {
  constructor(public data: string) {}

  // Rust의 Drop::drop에 해당 - JS에서는 수동 호출 필요
  drop(): void {
    console.log(`Dropping CustomSmartPointer with data \`${this.data}\`!`);
  }
}

// FinalizationRegistry: JS에서 GC 시 콜백 등록 (호출 보장 안 됨)
const registry = new FinalizationRegistry((data: string) => {
  console.log(`Dropping CustomSmartPointer with data \`${data}\`!`);
});

{
  const c = new CustomSmartPointer("my stuff");
  registry.register(c, c.data);
  const d = new CustomSmartPointer("other stuff");
  registry.register(d, d.data);
  console.log("CustomSmartPointers created.");
  // Rust: 스코프 끝에서 d.drop(), c.drop() 자동 호출 (역순)
  // JS: GC가 언제 수거할지 알 수 없음
}
