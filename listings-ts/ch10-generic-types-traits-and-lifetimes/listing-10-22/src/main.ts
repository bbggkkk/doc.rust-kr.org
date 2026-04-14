// 서로 다른 라이프타임을 가진 참조자로 longest 호출
function main() {
    const string1 = "long string is long";

    {
        const string2 = "xyz";
        const result = longest(string1, string2);
        console.log(`The longest string is ${result}`);
        // result는 안쪽 스코프에서 사용 -> 문제없음
    }
}

main();
