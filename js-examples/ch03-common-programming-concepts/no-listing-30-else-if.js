// Rust: if/else if/else 체인
const number = 6;

if (number % 4 === 0) {
  console.log("number is divisible by 4");
} else if (number % 3 === 0) {
  console.log("number is divisible by 3");
} else if (number % 2 === 0) {
  console.log("number is divisible by 2");
} else {
  console.log("number is not divisible by 4, 3, or 2");
}
