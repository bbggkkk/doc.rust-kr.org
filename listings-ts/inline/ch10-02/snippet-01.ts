// 트레이트 바운드 문법: pub fn notify<T: Summary>(item: &T)
function notify<T extends Summary>(item: T): void {
    console.log(`Breaking news! ${item.summarize()}`);
}
