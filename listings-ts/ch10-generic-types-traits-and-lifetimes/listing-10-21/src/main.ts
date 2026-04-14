// fn longest<'a>(x: &'a str, y: &'a str) -> &'a str
// 라이프타임 'a: 반환값이 입력 참조와 같은 수명을 가짐
// TS에서는 GC가 메모리를 관리하므로 라이프타임 불필요
function longest(x: string, y: string): string {
    if (x.length > y.length) {
        return x;
    } else {
        return y;
    }
}
