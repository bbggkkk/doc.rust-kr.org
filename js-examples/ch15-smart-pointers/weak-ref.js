// Rust의 Weak<T> → JS의 WeakRef
// 순환 참조를 방지하기 위한 약한 참조

// Rust: Rc::downgrade()로 Weak<T> 생성
// JS: new WeakRef()로 약한 참조 생성

// 트리 구조: 부모 → 자식 (강한 참조), 자식 → 부모 (약한 참조)
class Node {
  constructor(value) {
    this.value = value;
    this.children = [];
    this.parent = null; // WeakRef로 저장
  }

  setParent(parentNode) {
    // Rust: Weak<Node>에 해당
    this.parent = new WeakRef(parentNode);
  }

  getParent() {
    // Rust: weak.upgrade()에 해당 — Option<Rc<T>> 반환
    // JS: deref()가 undefined를 반환할 수 있음
    return this.parent?.deref() ?? null;
  }
}

const branch = new Node(5);
const leaf = new Node(3);

branch.children.push(leaf);
leaf.setParent(branch);

console.log(leaf.getParent()?.value); // 5
// branch가 GC되면 leaf.getParent()는 null을 반환합니다.
