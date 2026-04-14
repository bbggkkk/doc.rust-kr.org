// unsafe 블록: Rust 컴파일러의 안전성 검사를 우회 (JS/TS에는 해당 개념 없음)
// 임의 메모리 위치에서 슬라이스를 만드는 것은 정의되지 않은 동작을 유발할 수 있음
// TS에서는 이런 위험한 메모리 조작이 불가능

const address = 0x01234;

// Rust: slice::from_raw_parts_mut(r, 10000)
// TS에서는 임의 메모리 주소로부터 배열을 생성할 수 없음
// ArrayBuffer/DataView가 가장 가까운 개념이지만, 임의 주소 접근은 불가
const values = new Int32Array(new ArrayBuffer(10000 * 4)); // 개념적 표현
