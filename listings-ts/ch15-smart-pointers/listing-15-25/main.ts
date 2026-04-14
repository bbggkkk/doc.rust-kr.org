// Rust의 RefCell<Rc<List>>는 가리키는 대상을 변경할 수 있게 합니다.
// JS에서는 객체 프로퍼티를 자유롭게 재할당할 수 있으므로 자연스럽습니다.

type List = { kind: "Cons"; value: number; next: List | null }
           | null;

function tail(list: List): List | undefined {
  if (list && list.kind === "Cons") {
    return list.next;
  }
  return undefined;
}

// 이 구조에서는 next를 나중에 변경할 수 있어 순환 참조가 가능합니다.
