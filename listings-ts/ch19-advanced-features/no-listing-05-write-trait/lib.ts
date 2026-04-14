// Rust: Result<T, E>를 반복 사용하는 Write 트레이트
// TS에서는 에러를 throw하거나 Result 타입을 직접 정의

type Result<T, E = Error> = { ok: true; value: T } | { ok: false; error: E };

interface Write {
  write(buf: Uint8Array): Result<number, Error>;
  flush(): Result<void, Error>;
  writeAll(buf: Uint8Array): Result<void, Error>;
  writeFmt(fmt: string): Result<void, Error>;
}
