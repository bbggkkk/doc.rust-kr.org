// Rust: loop { ... } → break 없으면 ! (never) 타입
// TS: while(true)로 무한 루프, 반환 타입은 never

process.stdout.write("forever ");

while (true) {
  process.stdout.write("and ever ");
}
// 이 코드 아래는 도달 불가 (unreachable)
