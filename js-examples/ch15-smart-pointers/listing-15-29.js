// strong_count와 weak_count 변화 시각화
// Rust: Rc::strong_count()와 Rc::weak_count()로 추적
// JS: GC가 내부적으로 관리하며 개발자에게 노출하지 않음

class Node {
  constructor(value) {
    this.value = value;
    this.children = [];
    this.parent = null;
  }
}

const leaf = new Node(3);
// Rust: strong_count = 1, weak_count = 0

{
  const branch = new Node(5);
  branch.children.push(leaf);
  leaf.parent = new WeakRef(branch);

  // Rust: branch strong_count = 1, weak_count = 1
  // Rust: leaf strong_count = 2 (branch.children에 추가됨)

  console.log("branch exists:", branch.value);
}
// branch가 스코프를 벗어남
// Rust: branch strong_count → 0, 메모리 해제
// JS: branch가 GC 대상이 됨 (시점 비결정적)

// leaf.parent.deref()가 undefined일 수 있음 (branch가 GC됨)
console.log("leaf parent:", leaf.parent?.deref()?.value ?? "None");
