// 라이프타임 명시 없이는 컴파일 에러 (Rust)
// TS에서는 라이프타임 개념이 없으므로 문제없이 동작
function longest(x: string, y: string): string {
    if (x.length > y.length) {
        return x;
    } else {
        return y;
    }
}
// Rust: 반환 타입에 라이프타임이 없어서 컴파일 에러
// 반환할 참조자가 x인지 y인지 알 수 없기 때문
