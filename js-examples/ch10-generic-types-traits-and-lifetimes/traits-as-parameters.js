// Rust의 impl Summary 매개변수 → JS에서는 덕 타이핑으로 처리합니다
// summarize() 메서드만 있으면 어떤 객체든 전달할 수 있습니다
function notify(item) {
    console.log(`Breaking news! ${item.summarize()}`);
}

// TypeScript라면 인터페이스로 제약할 수 있습니다:
// function notify(item: Summary): void { ... }
