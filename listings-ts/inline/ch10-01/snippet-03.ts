// enum Result<T, E> -> 성공/실패 유니온 타입
type Result<T, E> = { ok: true; value: T } | { ok: false; error: E };
// Ok(T) -> { ok: true, value: T }
// Err(E) -> { ok: false, error: E }
