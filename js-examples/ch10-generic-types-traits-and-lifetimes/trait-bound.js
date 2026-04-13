// Rust: pub fn notify<T: Summary>(item: &T)
// JS에서는 타입 제약이 없으므로 어떤 객체든 전달할 수 있습니다.
// 다만, summarize 메서드가 없으면 런타임 에러가 발생합니다.
function notify(item) {
    console.log(`Breaking news! ${item.summarize()}`);
}
