// Rust: type Result<T> = std::result::Result<T, std::io::Error>;
// TS: 에러 타입을 고정한 타입 별칭

type IoResult<T> = { ok: true; value: T } | { ok: false; error: Error };
