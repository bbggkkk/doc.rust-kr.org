// Rust 작업공간의 라이브러리 크레이트 → JS 모노레포의 패키지

// add_one/src/lib.rs에 해당
export function addOne(x) {
  return x + 1;
}

// 테스트 (Rust의 #[test]에 해당)
import assert from "node:assert";
assert.strictEqual(addOne(3), 4);
