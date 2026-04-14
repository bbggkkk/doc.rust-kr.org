// Node 인스턴스 생성 (위의 Node 인터페이스 사용)
const leaf: Node = {
  value: 3,
  children: [], // 자식 없음
};

const branch: Node = {
  value: 5,
  children: [leaf], // Rc::clone(&leaf) → JS에서는 같은 참조 공유
};
