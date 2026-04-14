// Rust: let guess: u32 = guess.trim().parse().expect("Please type a number!");
// 섀도잉(shadowing): Rust에서는 같은 이름으로 다른 타입의 변수를 재선언 가능
// JS에서는 같은 스코프에서 let 재선언 불가 -> 다른 변수명 사용
const guessNumber: number = parseInt(guess.trim());
if (isNaN(guessNumber)) throw new Error("Please type a number!");
