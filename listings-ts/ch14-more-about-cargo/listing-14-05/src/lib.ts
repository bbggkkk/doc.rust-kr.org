/**
 * # Art
 *
 * A library for modeling artistic concepts.
 *
 * @module
 */

// Rust: pub use self::kinds::PrimaryColor;
// pub use → re-export로 공개 API를 최상위에 노출
// TypeScript에서는 배럴 파일(index.ts)에서 re-export
export { PrimaryColor } from "./kinds";
export { SecondaryColor } from "./kinds";
export { mix } from "./utils";

// 모듈 내부 구조는 그대로 유지하면서
// 사용자는 최상위에서 바로 import 가능
