// Rust: type Result<T> = std::result::Result<T, std::io::Error>
// JavaScript에서는 Promise가 Result<T, E>와 유사한 역할

/**
 * @template T
 * @typedef {Promise<T>} IoResult
 */

// 타입 별칭으로 코드 중복을 줄일 수 있습니다
