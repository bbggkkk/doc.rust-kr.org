// TypeScript에서도 예약어를 함수 이름으로 사용할 수 없습니다.
// 예: class, return, function, if 등은 식별자로 사용 불가
// Rust의 `match`도 마찬가지로 예약된 키워드입니다.

// ❌ 컴파일 에러 — 'class'는 예약어
// function class(needle: string, haystack: string): boolean {
//     return haystack.includes(needle);
// }
