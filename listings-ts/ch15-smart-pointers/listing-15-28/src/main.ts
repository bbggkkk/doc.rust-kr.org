// Weak<T> → JS의 WeakRef<T>와 유사
// 부모 참조에 Weak 사용: 순환 참조 방지
interface Node {
  value: number;
  parent: WeakRef<Node> | null; // RefCell<Weak<Node>> → WeakRef
  children: Node[];              // RefCell<Vec<Rc<Node>>> → 배열
}

const leaf: Node = {
  value: 3,
  parent: null, // Weak::new() - 아직 부모 없음
  children: [],
};

console.log("leaf parent =", leaf.parent?.deref()); // None

const branch: Node = {
  value: 5,
  parent: null,
  children: [leaf], // Rc::clone(&leaf)
};

// leaf의 부모를 branch로 설정
// Rust: *leaf.parent.borrow_mut() = Rc::downgrade(&branch)
leaf.parent = new WeakRef(branch); // Rc::downgrade → WeakRef 생성

// Rust: leaf.parent.borrow().upgrade() → Some(branch)
// JS: leaf.parent.deref() → branch (GC 수거 전이라면)
console.log("leaf parent =", leaf.parent?.deref());
