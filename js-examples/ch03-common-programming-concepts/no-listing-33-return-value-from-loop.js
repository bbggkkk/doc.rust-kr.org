// Rust: loop는 break로 값을 반환할 수 있는 표현식
// JS: while(true)에서 break는 값을 반환할 수 없음 → 변수 사용
let counter = 0;
let result;

while (true) {
    counter += 1;
    if (counter === 10) {
        result = counter * 2; // Rust: break counter * 2;
        break;
    }
}

console.log(`The result is ${result}`); // 20
