// Rust에서는 longest 함수에 라이프타임 명시가 필요합니다.
// JS에서는 GC가 메모리를 관리하므로 라이프타임 개념이 없습니다.
const string1 = "abcd";
const string2 = "xyz";

// 이 시점에서는 longest 함수가 아직 정의되지 않았습니다.
// Rust에서도 이 코드는 함수 시그니처 없이는 컴파일되지 않습니다.
function longest(x, y) {
    return x.length > y.length ? x : y;
}

const result = longest(string1, string2);
console.log(`The longest string is ${result}`);
