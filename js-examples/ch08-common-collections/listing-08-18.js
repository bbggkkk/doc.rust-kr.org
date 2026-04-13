// Rust의 + 연산자는 소유권을 이동시키지만, JS에서는 새 문자열을 생성
const s1 = "Hello, ";
const s2 = "world!";
const s3 = s1 + s2; // JS에서는 s1, s2 모두 계속 사용 가능
