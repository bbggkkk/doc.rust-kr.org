// fn notify(item: &impl Summary) -> 매개변수로서의 트레이트
// TS: Summary 인터페이스를 구현하는 타입을 매개변수로 받음
function notify(item: Summary): void {
    console.log(`Breaking news! ${item.summarize()}`);
}
