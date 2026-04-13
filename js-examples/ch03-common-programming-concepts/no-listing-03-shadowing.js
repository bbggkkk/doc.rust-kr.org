// Rust의 섀도잉: 같은 이름으로 새 변수를 선언하여 이전 변수를 가림
// JS에서는 같은 스코프에서 let을 두 번 선언하면 SyntaxError!
// 대신 JS에서는 재할당으로 비슷한 효과를 냅니다

let x = 5;
x = x + 1; // JS: 재할당 (같은 변수)
            // Rust: let x = x + 1; (새 변수가 이전 것을 가림)

{
    // 블록 스코프 안에서는 JS도 같은 이름의 새 변수 선언 가능
    let x = x * 2; // 하지만 JS에서 이건 ReferenceError (TDZ)!
    // JS로 정확히 표현하면:
    let innerX = x * 2; // 별도 이름 필요
    console.log(`The value of x in the inner scope is: ${innerX}`);
}

console.log(`The value of x is: ${x}`); // 6
