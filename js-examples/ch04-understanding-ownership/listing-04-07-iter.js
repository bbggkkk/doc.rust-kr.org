// Rust: for (i, &item) in bytes.iter().enumerate()
// JS에서는 entries() 메서드로 인덱스와 값을 함께 순회합니다.
const s = "hello world";
for (const [i, char] of [...s].entries()) {
  if (char === " ") {
    console.log(`Space found at index ${i}`);
  }
}
