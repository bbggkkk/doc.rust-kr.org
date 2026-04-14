// + 구문: impl Summary + Display
// TS: 인터섹션 타입으로 여러 인터페이스 요구
function notify(item: Summary & Display): void {
    // ...
}
