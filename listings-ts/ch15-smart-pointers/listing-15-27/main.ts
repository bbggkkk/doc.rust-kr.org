// 트리 구조: JS에서는 참조 공유가 기본이므로
// Rc<T>나 RefCell<T> 없이 자연스럽게 구현됩니다.

interface Node {
  value: number;
  children: Node[];
}

const leaf: Node = {
  value: 3,
  children: [],
};

const branch: Node = {
  value: 5,
  children: [leaf], // leaf을 참조로 공유
};
