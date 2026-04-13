// JavaScript로 보기 — unsafe는 JS에 없는 개념입니다
// Rust: 임의 메모리 위치에서 슬라이스 생성 (정의되지 않은 동작 위험)
// JavaScript에서는 임의 메모리에 접근할 수 없습니다.

const buffer = new ArrayBuffer(10000 * 4);
const values = new Int32Array(buffer);
// JavaScript는 항상 할당된 메모리만 접근 가능하므로
// Rust의 임의 메모리 접근과 같은 위험이 없습니다
console.log("length:", values.length); // 10000
