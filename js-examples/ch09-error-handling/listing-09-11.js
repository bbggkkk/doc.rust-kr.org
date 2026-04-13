// Rust의 Option에 대한 ? 연산자: None이면 즉시 None 반환
// JS의 옵셔널 체이닝(?.)이 가장 유사
function lastCharOfFirstLine(text) {
    // ?. 연산자로 중간에 undefined/null이면 단락 평가
    const firstLine = text.split("\n")[0];
    return firstLine?.slice(-1) || undefined;
}

lastCharOfFirstLine("Hello, world\nHow are you?"); // "d"
lastCharOfFirstLine("");                            // undefined
lastCharOfFirstLine("\nhi");                        // undefined
