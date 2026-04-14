// Rust에서는 Mutex를 여러 스레드로 이동(move)할 수 없습니다.
// JS에서는 SharedArrayBuffer + Atomics로 스레드 간 공유가 가능합니다.

// JS Worker 환경에서의 공유 카운터 (SharedArrayBuffer 사용)
const shared = new SharedArrayBuffer(4);
const counter = new Int32Array(shared);
counter[0] = 0;

// Rust에서는 counter의 소유권을 여러 스레드로 이동할 수 없어 에러!
// JS에서는 SharedArrayBuffer를 Worker에 전달하여 공유 가능

const promises: Promise<void>[] = [];
for (let i = 0; i < 10; i++) {
  // Atomics.add로 원자적 증가 (Mutex::lock과 유사)
  Atomics.add(counter, 0, 1);
}

console.log(`Result: ${counter[0]}`);
