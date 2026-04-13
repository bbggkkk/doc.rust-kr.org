const number = 3;

if (number < 5) {       // Rust: 조건에 괄호 불필요
    console.log("condition was true");
} else {
    console.log("condition was false");
}
// 차이: Rust는 조건이 반드시 bool이어야 함
// JS: if (1), if ("hello") 등 truthy/falsy 허용
