// JS에서 함수에 값을 전달해도 소유권 이동 없음
function takesOwnership(someString) {
    console.log(someString);
} // JS: someString이 스코프 밖으로 나가도 GC가 나중에 처리

function makesCopy(someInteger) {
    console.log(someInteger);
}

let s = "hello";
takesOwnership(s);
console.log(s);    // JS: 정상 동작 ✅ — 소유권 개념 없음
                    // Rust: s가 함수로 이동되어 여기서 사용 불가 ❌

let x = 5;
makesCopy(x);
console.log(x);    // JS: ✅ / Rust: ✅ (정수는 Copy 트레이트로 복사됨)
