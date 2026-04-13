// Rust에서 이 코드는 컴파일되지 않습니다 — 반환 참조자의 라이프타임을 명시하지 않았기 때문입니다.
// JS에서는 라이프타임이 없으므로 아래 코드가 문제없이 동작합니다.
function longest(x, y) {
    if (x.length > y.length) {
        return x;
    } else {
        return y;
    }
}

const result = longest("abcd", "xyz");
console.log(`The longest string is ${result}`);
