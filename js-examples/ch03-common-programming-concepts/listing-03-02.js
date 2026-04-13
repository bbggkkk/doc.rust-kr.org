// Rust: if는 표현식 → 값을 반환하여 변수에 할당 가능
// JS: if는 구문 → 삼항 연산자로 대체
const condition = true;
const number = condition ? 5 : 6; // Rust: let number = if condition { 5 } else { 6 };

// Rust에서는 if/else 양쪽 타입이 같아야 함
// JS 삼항 연산자는 타입 제한 없음
