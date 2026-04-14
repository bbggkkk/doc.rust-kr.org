// JS에서는 GC(가비지 컬렉터)가 메모리를 자동으로 정리합니다.
// Rust의 Drop 트레이트와 달리 정리 시점을 정확히 제어할 수 없습니다.

class CustomSmartPointer {
  constructor(public data: string) {}

  // Rust의 Drop::drop()에 해당하지만,
  // JS에서는 GC가 정리 시점을 결정하므로 호출 시점이 보장되지 않습니다.
  // FinalizationRegistry를 사용하면 유사한 콜백을 등록할 수 있습니다.
}

// FinalizationRegistry: GC 수집 시 콜백 (Drop과 유사하지만 비결정적)
const registry = new FinalizationRegistry((data: string) => {
  console.log(`Dropping CustomSmartPointer with data \`${data}\`!`);
});

function main() {
  const c = new CustomSmartPointer("my stuff");
  registry.register(c, c.data);

  const d = new CustomSmartPointer("other stuff");
  registry.register(d, d.data);

  console.log("CustomSmartPointers created.");
  // JS에서는 스코프를 벗어나도 GC가 언제 정리할지 알 수 없음
}

main();
