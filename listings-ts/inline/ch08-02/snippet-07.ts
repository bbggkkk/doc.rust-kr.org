// Rust: fn add(self, s: &str) -> String
// TypeScript에서 + 연산자는 자동으로 문자열을 연결
// 별도의 메서드 시그니처가 필요 없음
function add(self: string, s: string): string {
    return self + s;
}
