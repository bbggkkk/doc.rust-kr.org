/**
 * # My Crate
 *
 * `my_crate` is a collection of utilities to make performing certain
 * calculations more convenient.
 *
 * @module
 */
// Rust의 //! 모듈 문서 → JSDoc의 @module 태그

/**
 * Adds one to the number given.
 */
// --생략--
export function addOne(x: number): number {
  return x + 1;
}
