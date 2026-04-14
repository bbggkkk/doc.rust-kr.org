// 라이프타임 생략 규칙: TS에서는 해당 개념 없음 (GC 관리)
// Rust 컴파일러가 자동으로 라이프타임을 추론하는 경우
function firstWord(s: string): string {
    const bytes = s.split("");

    for (let i = 0; i < bytes.length; i++) {
        if (bytes[i] === " ") {
            return s.slice(0, i);
        }
    }

    return s;
}
