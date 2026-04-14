// 트리 데이터 구조: 자식 노드를 가진 Node
// Rc<Node> → JS에서는 참조로 자연스럽게 공유
// RefCell<Vec<Rc<Node>>> → JS에서는 가변 배열
interface Node {
  value: number;
  children: Node[]; // RefCell<Vec<Rc<Node>>> → 그냥 배열
}

const leaf: Node = {
  value: 3,
  children: [],
};

const branch: Node = {
  value: 5,
  children: [leaf], // Rc::clone(&leaf) → JS에서는 같은 참조 공유
};
