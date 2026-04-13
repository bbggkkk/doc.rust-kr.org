// Rust에서는 ..을 두 번 사용하면 모호하여 컴파일 에러가 납니다.
// JS의 구조 분해에서도 rest 요소(...)는 한 번만 사용할 수 있습니다.

const numbers = [2, 4, 8, 16, 32];

// JS에서도 ...rest는 마지막에 한 번만 가능
// const [...first, second, ...last] = numbers; // SyntaxError!
