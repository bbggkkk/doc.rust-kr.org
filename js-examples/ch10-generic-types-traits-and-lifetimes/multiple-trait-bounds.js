// Rust: pub fn notify(item: &(impl Summary + Display))
// JS에서는 여러 트레이트(인터페이스)를 동시에 요구하는 문법이 없습니다.
// 덕 타이핑으로, 해당 메서드들이 있으면 그냥 동작합니다.
function notify(item) {
    // item.summarize()와 item.toString()이 모두 있어야 합니다
    console.log(`Breaking news! ${item.summarize()}`);
    console.log(`Display: ${item.toString()}`);
}
