// Rust 카고 작업공간 → npm/yarn 워크스페이스
//
// Rust 작업공간 (Cargo.toml):
//   [workspace]
//   members = ["adder", "add_one", "add_two"]
//
// npm 워크스페이스 (package.json):
//   {
//     "workspaces": ["packages/*"]
//   }
//
// yarn 워크스페이스 (package.json):
//   {
//     "workspaces": ["packages/adder", "packages/add-one"]
//   }

// packages/add-one/index.js
export function addOne(x) {
  return x + 1;
}

// packages/adder/index.js
import { addOne } from "add-one";
console.log(`10 plus one is ${addOne(10)}!`);

// 공통점:
// - 하나의 lock 파일 공유 (Cargo.lock ↔ package-lock.json / yarn.lock)
// - 의존성 버전 통일
// - 개별 패키지 독립 배포 가능
