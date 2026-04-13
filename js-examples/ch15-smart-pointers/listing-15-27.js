// 트리 데이터 구조: 자식 노드를 가진 Node
// Rust: Rc<Node>와 RefCell<Vec<Rc<Node>>>를 사용
// JS: 객체 참조로 자연스럽게 구현

class Node {
  constructor(value, children = []) {
    this.value = value;
    this.children = children;
  }
}

const leaf = new Node(3);
const branch = new Node(5, [leaf]);

console.log(branch.value); // 5
console.log(branch.children[0].value); // 3

// Rust에서는 Rc<T>와 RefCell<T>로 소유권과 가변성을 관리해야 하지만,
// JS에서는 객체 참조로 자연스럽게 구현됩니다.
