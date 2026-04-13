// 산술 연산은 JS와 거의 동일
const sum = 5 + 10;
const difference = 95.5 - 4.3;
const product = 4 * 30;
const quotient = 56.7 / 32.2;
// 주의: Rust 정수 나눗셈은 버림 → JS에서는 Math.trunc() 필요
const truncated = Math.trunc(-5 / 3); // -1 (Rust: -5 / 3 = -1)
// JS의 / 연산자는 항상 부동소수점: -5 / 3 = -1.666...
const remainder = 43 % 5;
