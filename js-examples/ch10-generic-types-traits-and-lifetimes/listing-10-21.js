// Rust의 라이프타임('a)은 참조자의 유효 기간을 컴파일러에게 알려줍니다.
// JS는 가비지 컬렉터(GC)가 메모리를 자동으로 관리하므로
// 라이프타임이라는 개념 자체가 필요 없습니다.
// 아래 함수는 댕글링 참조 걱정 없이 자유롭게 값을 반환할 수 있습니다.
function longest(x, y) {
    if (x.length > y.length) {
        return x;
    } else {
        return y;
    }
}

const result = longest("abcd", "xyz");
console.log(`The longest string is ${result}`);
