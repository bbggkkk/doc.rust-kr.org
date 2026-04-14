// JS에서는 모든 객체가 힙에 할당되므로,
// 재귀적 타입의 크기 문제가 발생하지 않습니다.

type List = { kind: "Cons"; value: number; next: List }
           | { kind: "Nil" };

// JS에서는 이것이 자연스럽게 동작합니다 - Box 불필요!
