// strong_count / weak_count 시각화
// JS에서는 참조 카운트를 직접 확인할 수 없음
// WeakRef는 GC가 수거하면 deref()가 undefined 반환
interface Node {
  value: number;
  parent: WeakRef<Node> | null;
  children: Node[];
}

const leaf: Node = {
  value: 3,
  parent: null,
  children: [],
};
// Rust: strong=1, weak=0

{
  const branch: Node = {
    value: 5,
    parent: null,
    children: [leaf],
  };
  // Rust: branch → strong=1, weak=1 (leaf.parent가 약한 참조)

  leaf.parent = new WeakRef(branch);
  // Rust: leaf → strong=2 (branch.children에 추가됨)

  // JS에서는 참조 카운트를 확인할 수 없지만,
  // WeakRef를 통해 약한 참조의 유효성은 확인 가능
  console.log("branch alive?", leaf.parent?.deref() !== undefined);
}

// branch가 스코프를 벗어남
// Rust: branch의 strong_count가 0이 되어 해제됨
// JS: branch에 대한 강한 참조가 없으면 GC가 수거
// → leaf.parent.deref()가 undefined가 될 수 있음 (GC 타이밍에 따라)
console.log("leaf parent =", leaf.parent?.deref()); // undefined일 수 있음
