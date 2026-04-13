// Rust의 panic!은 프로그램을 즉시 종료시킴
// JS에서는 throw로 예외를 발생시키는 것이 가장 유사함
function main() {
    throw new Error("crash and burn");
}

main();
