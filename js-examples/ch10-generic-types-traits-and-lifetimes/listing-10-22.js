// Rust: 두 문자열의 라이프타임이 모두 유효한 범위 내에서 result를 사용합니다.
// JS에서는 GC 덕분에 스코프에 관계없이 값이 유효합니다.
function longest(x, y) {
    return x.length > y.length ? x : y;
}

const string1 = "long string is long";
{
    const string2 = "xyz";
    const result = longest(string1, string2);
    console.log(`The longest string is ${result}`);
}
