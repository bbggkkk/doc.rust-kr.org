// JS에서는 참조 카운트를 직접 확인할 수 없습니다.
// WeakRef를 사용하면 GC가 대상을 수집할 수 있게 됩니다.

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

console.log("leaf - 참조 카운트 확인 불가 (GC가 관리)");

{
  const branch: Node = {
    value: 5,
    parent: null,
    children: [leaf],
  };

  // WeakRef로 부모 참조 설정
  leaf.parent = new WeakRef(branch);

  console.log("branch 생성됨 - leaf.parent:", leaf.parent.deref()?.value);
  console.log("leaf의 children:", leaf.children.length);
}

// branch가 스코프를 벗어남 → GC가 수집할 수 있음
// WeakRef.deref()가 undefined를 반환할 수 있음
console.log("leaf parent =", leaf.parent?.deref()); // undefined일 수 있음
