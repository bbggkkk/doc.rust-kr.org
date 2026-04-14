function main() {
    const s = "hello"; // Rust: String::from("hello") - 힙에 할당, s가 소유권을 가짐

    takesOwnership(s);  // Rust: s의 소유권이 함수로 이동됩니다
                        // JS에서는 s를 계속 사용할 수 있지만,
                        // Rust에서는 이 시점 이후 s를 사용할 수 없습니다!

    const x = 5;        // x가 스코프 안으로 들어옵니다

    makesCopy(x);       // Rust: i32는 Copy 트레이트를 가지므로 값이 복사됩니다
                        // x는 이후에도 계속 사용 가능합니다 (JS와 동일)
}

function takesOwnership(someString: string) { // Rust: 소유권을 받습니다
    console.log(someString);
} // Rust: 여기서 someString이 스코프를 벗어나고 drop이 호출되어 메모리 해제
  // JS: GC가 나중에 수거

function makesCopy(someInteger: number) { // Rust: 값이 복사되어 전달됩니다
    console.log(someInteger);
} // 원시 타입이므로 별다른 일 없음

main();
