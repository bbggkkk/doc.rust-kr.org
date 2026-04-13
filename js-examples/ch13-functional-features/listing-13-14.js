// 반복자 어댑터 map — 게으른 평가
// Rust에서는 map이 게으르게 동작하여 소비하지 않으면 아무 일도 안 합니다.
// JS의 Array.map은 즉시 실행됩니다 (게으르지 않음).

const v1 = [1, 2, 3];

// JS의 map은 즉시 새 배열을 반환합니다 (Rust와 다름)
v1.map((x) => x + 1); // 결과를 사용하지 않으면 낭비

// Rust처럼 게으른 반복자가 필요하면 제너레이터를 사용할 수 있습니다:
function* lazyMap(iter, fn) {
  for (const item of iter) {
    yield fn(item);
  }
}

const lazy = lazyMap(v1, (x) => x + 1);
// 아직 아무 일도 일어나지 않음 — Rust의 동작과 유사
