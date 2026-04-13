// Rust: 'counting_up: loop { ... break 'counting_up; }
// JS에는 루프 라벨이 있습니다.
let count = 0;
counting_up: while (true) {
  console.log(`count = ${count}`);
  let remaining = 10;

  while (true) {
    console.log(`remaining = ${remaining}`);
    if (remaining === 9) {
      break; // 안쪽 루프만 탈출
    }
    if (count === 2) {
      break counting_up; // 바깥쪽 루프 탈출
    }
    remaining -= 1;
  }

  count += 1;
}
console.log(`End count = ${count}`);
