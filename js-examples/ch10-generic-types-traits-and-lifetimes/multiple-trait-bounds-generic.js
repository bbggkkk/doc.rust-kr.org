// Rust: pub fn notify<T: Summary + Display>(item: &T)
// 제네릭 트레이트 바운드에 + 사용 — JS에서는 동일한 덕 타이핑 방식입니다.
function notify(item) {
    console.log(`Breaking news! ${item.summarize()}`);
    console.log(`Display: ${item.toString()}`);
}
