// Rust에서는 클로저가 외부 변수를 캡처할 때 소유권 문제가 발생합니다.
// JS에서는 클로저가 자유롭게 외부 변수를 캡처합니다.

const v = [1, 2, 3];

// Worker에서는 메인 스레드 변수에 직접 접근할 수 없음
// 대신 postMessage로 데이터를 전달해야 합니다.
const worker = new Worker("worker.js");
worker.postMessage(v); // 데이터를 복사하여 전달

// Rust: move 클로저로 소유권 이동
// JS Worker: postMessage로 데이터 복사 (structured clone)
// JS 일반 스레드(없음): 클로저가 자유롭게 캡처
