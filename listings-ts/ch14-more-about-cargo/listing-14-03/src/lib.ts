/**
 * # Art
 *
 * A library for modeling artistic concepts.
 *
 * @module
 */
// Rust의 //! 모듈 문서 → JSDoc @module

// Rust: pub mod kinds → 별도 파일/모듈로 분리
/** The primary colors according to the RYB color model. */
export type PrimaryColor = "Red" | "Yellow" | "Blue";

/** The secondary colors according to the RYB color model. */
export type SecondaryColor = "Orange" | "Green" | "Purple";

/**
 * Combines two primary colors in equal amounts to create
 * a secondary color.
 */
export function mix(c1: PrimaryColor, c2: PrimaryColor): SecondaryColor {
  // --생략--
  throw new Error("not implemented");
}
