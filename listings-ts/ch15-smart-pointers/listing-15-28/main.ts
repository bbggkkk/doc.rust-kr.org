// Rust의 Weak<T> → JS의 WeakRef<T>
// 부모에 대한 약한 참조로 순환 참조를 방지합니다.

interface Node {
  value: number;
  parent: WeakRef<Node> | null; // Weak<Node> → WeakRef<Node>
  children: Node[];
}

const leaf: Node = {
  value: 3,
  parent: null, // 아직 부모 없음 (Weak::new())
  children: [],
};

console.log("leaf parent =", leaf.parent?.deref()); // undefined (None)

const branch: Node = {
  value: 5,
  parent: null,
  children: [leaf],
};

// leaf의 부모를 branch로 설정 (약한 참조)
// Rust: Rc::downgrade(&branch) → JS: new WeakRef(branch)
leaf.parent = new WeakRef(branch);

// Rust: leaf.parent.borrow().upgrade() → JS: leaf.parent.deref()
console.log("leaf parent =", leaf.parent?.deref());
