// Node 인스턴스 생성 (위의 Node 인터페이스 사용)
const leaf: Node = {
  value: 3,
  parent: null, // Weak::new() → 아직 부모 없음
  children: [],
};

// Rust: leaf.parent.borrow().upgrade() → JS: leaf.parent?.deref()
console.log("leaf parent =", leaf.parent?.deref()); // undefined (None)

const branch: Node = {
  value: 5,
  parent: null,
  children: [leaf], // Rc::clone(&leaf) → 같은 참조 공유
};

// Rust: Rc::downgrade(&branch) → JS: new WeakRef(branch)
leaf.parent = new WeakRef(branch);

// Rust: leaf.parent.borrow().upgrade() → JS: leaf.parent.deref()
console.log("leaf parent =", leaf.parent?.deref());
