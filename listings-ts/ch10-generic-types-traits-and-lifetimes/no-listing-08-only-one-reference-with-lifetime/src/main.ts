// 항상 첫 번째 매개변수를 반환 -> y에는 라이프타임 불필요
// fn longest<'a>(x: &'a str, y: &str) -> &'a str
// 라이프타임 'a: 반환값은 x와 같은 수명
function longest(x: string, _y: string): string {
    return x;
}
