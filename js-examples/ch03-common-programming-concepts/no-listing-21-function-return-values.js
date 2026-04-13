// Rust: 마지막 표현식이 암묵적 반환값 (세미콜론 없이)
// JS: 반드시 return 키워드 사용 (화살표 함수의 암묵적 반환 제외)
function five() {
    return 5; // Rust에서는 그냥 5 (return 키워드 불필요)
}

// 화살표 함수를 쓰면 Rust의 암묵적 반환과 비슷:
const five = () => 5;

const x = five();
console.log(`The value of x is: ${x}`);
