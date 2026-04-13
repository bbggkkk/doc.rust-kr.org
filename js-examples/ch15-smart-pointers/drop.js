// Drop 트레이트: 스코프를 벗어날 때 자동 정리
// JS에는 Drop에 정확히 대응하는 개념이 없습니다.
// GC가 메모리를 자동 관리하며, 정리 시점을 보장하지 않습니다.

// JS에서 유사한 패턴들:

// 1. FinalizationRegistry (ES2021) — GC 시 콜백 (시점 보장 없음)
class CustomSmartPointer {
  constructor(data) {
    this.data = data;
    console.log(`CustomSmartPointer created with '${data}'`);
  }
}

const registry = new FinalizationRegistry((heldValue) => {
  console.log(`Dropping CustomSmartPointer with data '${heldValue}'!`);
});

let c = new CustomSmartPointer("my stuff");
registry.register(c, c.data);

let d = new CustomSmartPointer("other stuff");
registry.register(d, d.data);

console.log("CustomSmartPointers created.");

// 2. try-finally 패턴 — 확정적 정리
function withResource(resource, fn) {
  try {
    fn(resource);
  } finally {
    resource.close(); // 확정적 정리
    console.log("Resource cleaned up");
  }
}

// 3. using 선언 (TC39 Stage 3) — Rust의 Drop과 가장 유사
// using handle = getResource();
// 스코프를 벗어나면 handle[Symbol.dispose]()가 자동 호출됩니다.
