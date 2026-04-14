// 타입 별칭을 사용하면 반복이 줄어듦

type IoResult<T> = { ok: true; value: T } | { ok: false; error: Error };

interface Write {
  write(buf: Uint8Array): IoResult<number>;
  flush(): IoResult<void>;
  writeAll(buf: Uint8Array): IoResult<void>;
  writeFmt(fmt: string): IoResult<void>;
}
