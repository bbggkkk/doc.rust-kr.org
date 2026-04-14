// Option<char> -> string | undefined
// ?를 Option에 사용: None이면 즉시 반환
function lastCharOfFirstLine(text: string): string | undefined {
    // text.lines().next()?.chars().last()
    const firstLine = text.split("\n")[0]; // lines().next()
    if (firstLine === undefined || firstLine.length === 0) {
        return undefined; // None에 해당 (? 연산자가 None 시 즉시 반환)
    }
    return firstLine[firstLine.length - 1]; // last()에 해당
}
