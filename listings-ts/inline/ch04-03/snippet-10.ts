// Rust: let s = "Hello, world!";
// 문자열 리터럴의 타입은 &str (문자열 슬라이스)입니다
// 바이너리에 하드코딩된 데이터를 가리키는 불변 참조자입니다
const s: string = "Hello, world!";
// JS에서는 모든 문자열이 동일한 타입이지만,
// Rust에서는 String(소유, 힙)과 &str(참조, 슬라이스)를 구분합니다
