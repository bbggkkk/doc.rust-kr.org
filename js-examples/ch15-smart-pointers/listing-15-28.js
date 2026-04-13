// 자식에서 부모로 가는 참조: Weak<T> 사용
// Rust: parent 필드에 Weak<Node>를 사용하여 순환 참조 방지
// JS: WeakRef로 유사한 패턴 구현 가능

class Node {
  constructor(value) {
    this.value = value;
    this.children = [];
    this.parent = null; // WeakRef 사용
  }
}

const leaf = new Node(3);
const branch = new Node(5);

branch.children.push(leaf);
leaf.parent = new WeakRef(branch); // 약한 참조

console.log(`leaf parent = ${leaf.parent.deref()?.value}`); // 5

// Rust의 Weak<T>.upgrade()는 Option<Rc<T>>를 반환
// JS의 WeakRef.deref()는 객체 또는 undefined를 반환
