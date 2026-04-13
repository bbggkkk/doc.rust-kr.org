// Rust: match guess.cmp(&secret_number) {
//           Ordering::Equal => { println!("You win!"); break; }
//       }
// JS에서는 if-else로 비교하고 break로 루프를 탈출합니다.
if (guess === secretNumber) {
  console.log("You win!");
  break;
}
