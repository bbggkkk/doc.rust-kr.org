// Rust: pub fn notify(item1: &impl Summary, item2: &impl Summary)
// JS에서는 매개변수 타입 제약이 없으므로 자연스럽게 두 객체를 받습니다.
function notify(item1, item2) {
    console.log(`Breaking news! ${item1.summarize()}`);
    console.log(`Breaking news! ${item2.summarize()}`);
}
