// TypeScript에는 Rust의 r# 같은 원시 식별자 문법이 없지만,
// 애초에 `match`는 JS/TS에서 예약어가 아니므로
// 그냥 함수 이름으로 사용할 수 있습니다.

function match(needle: string, haystack: string): boolean {
    return haystack.includes(needle);
}

console.assert(match("foo", "foobar"));
