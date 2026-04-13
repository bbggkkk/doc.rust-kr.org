// Rust: pub fn notify<T: Summary>(item1: &T, item2: &T)
// 같은 타입을 강제하는 것은 JS에서는 런타임 체크로만 가능합니다.
function notify(item1, item2) {
    if (item1.constructor !== item2.constructor) {
        throw new Error("Both items must be the same type");
    }
    console.log(`Breaking news! ${item1.summarize()}`);
    console.log(`Breaking news! ${item2.summarize()}`);
}
