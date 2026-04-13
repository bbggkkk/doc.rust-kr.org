// Rc<T> 참조 카운트 변화 추적
// Rust: Rc::strong_count()로 참조 카운트를 출력
// JS: GC가 내부적으로 추적하지만 개발자에게 노출하지 않음

const shared = { value: [5, 10] };
let refCount = 1; // 수동 추적 시뮬레이션

console.log(`count after creating a = ${refCount}`); // 1

// b가 참조
const b = shared;
refCount++;
console.log(`count after creating b = ${refCount}`); // 2

{
  // c가 참조 (내부 스코프)
  const c = shared;
  refCount++;
  console.log(`count after creating c = ${refCount}`); // 3

  // c가 스코프를 벗어남
  refCount--;
  console.log(`count after c goes out of scope = ${refCount}`); // 2
}

// JS에서는 Rc::strong_count()에 해당하는 API가 없습니다.
// GC가 비결정적으로 메모리를 관리합니다.
