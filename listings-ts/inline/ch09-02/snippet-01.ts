// Result<T, E>에 해당하는 타입
type Result<T, E> = { ok: true; value: T } | { ok: false; error: E };

// Ok(T) -> { ok: true, value: T }
// Err(E) -> { ok: false, error: E }
