/**
 * Adds one to the number given.
 *
 * @example
 * ```ts
 * const arg = 5;
 * const answer = addOne(arg);
 * console.assert(answer === 6);
 * ```
 */
// Rust의 /// doc comment → JSDoc /** */
export function addOne(x: number): number {
  return x + 1;
}
