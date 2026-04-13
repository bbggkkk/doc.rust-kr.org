// JavaScript로 보기 — unsafe는 JS에 없는 개념입니다
// Rust: 임의 메모리 주소를 원시 포인터로 생성
// JavaScript에는 임의 메모리 주소에 대한 포인터 개념이 없습니다.
// ArrayBuffer와 DataView를 사용하면 바이트 수준 접근이 가능하지만,
// 임의 메모리 주소를 직접 참조할 수는 없습니다.

const buffer = new ArrayBuffer(4);
const view = new DataView(buffer);
view.setInt32(0, 0x012345);
console.log("값:", view.getInt32(0)); // 74565
