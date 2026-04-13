// Rust 작업공간에서 크레이트 테스트 → JS 모노레포에서 패키지 테스트
// Rust: cargo test -p add_one
// JS: npm test --workspace=add_one (npm workspaces)

import assert from "node:assert";

function addOne(x) {
  return x + 1;
}

// 테스트
assert.strictEqual(addOne(3), 4);
console.log("test passed: addOne(3) === 4");
