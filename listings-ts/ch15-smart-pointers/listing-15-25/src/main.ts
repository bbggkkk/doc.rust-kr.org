// RefCell<Rc<List>>: 가리키는 대상을 변경 가능한 콘스 리스트
// JS에서는 객체 프로퍼티를 자유롭게 변경할 수 있음
type List =
  | { tag: "Cons"; value: number; next: List }
  | { tag: "Nil" };

function tail(list: List): List | null {
  if (list.tag === "Cons") return list.next;
  return null;
}
