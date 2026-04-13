// Rust: str 타입의 변수를 직접 만들 수 없음 (동적 크기 타입)
// JavaScript에서는 문자열이 동적 크기이지만 이런 제한이 없습니다

const s1 = "Hello there!";
const s2 = "How's it going?";

// JavaScript는 동적 타입이므로 다른 길이의 문자열을 자유롭게 다룹니다
console.log(s1.length); // 12
console.log(s2.length); // 15
