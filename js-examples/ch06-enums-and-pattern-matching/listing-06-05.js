// Rust의 Option<T> + match → JS에서는 null 체크
// 핵심 차이: Rust는 None 케이스를 빠뜨리면 컴파일 에러, JS는 조용히 통과
function plusOne(x) {
    if (x === null) return null;  // None => None
    return x + 1;                 // Some(i) => Some(i + 1)
}

const five = 5;
const six = plusOne(five);    // 6
const none = plusOne(null);   // null
