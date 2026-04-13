// Rust: cargo publish → crates.io에 배포
// JS:   npm publish → npmjs.com에 배포
//
// Cargo.toml 메타데이터 vs package.json 메타데이터:
//
// Cargo.toml:
//   [package]
//   name = "my-crate"
//   version = "0.1.0"
//   description = "A useful crate"
//   license = "MIT"
//
// package.json:
//   {
//     "name": "my-package",
//     "version": "0.1.0",
//     "description": "A useful package",
//     "license": "MIT"
//   }
//
// 배포 명령어:
//   Rust:  cargo login → cargo publish
//   JS:    npm login  → npm publish
//
// 버전 끌어내기:
//   Rust:  cargo yank --vers 1.0.1
//   JS:    npm deprecate my-package@1.0.1 "deprecated"
