// Rust: 타입 별칭을 사용한 Write 트레이트 시그니처
// JavaScript에서는 Promise로 반환 타입을 간결하게 표현합니다

class Writer {
  /** @returns {Promise<number>} */
  async write(buf) { return buf.length; }

  /** @returns {Promise<void>} */
  async flush() { /* ... */ }
}
