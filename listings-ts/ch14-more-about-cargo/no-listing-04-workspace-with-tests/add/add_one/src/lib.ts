export function addOne(x: number): number {
  return x + 1;
}

// Rust: #[cfg(test)] mod tests → Jest/Vitest 테스트
// assert_eq!(3, add_one(2));
console.assert(addOne(2) === 3, "it_works");
