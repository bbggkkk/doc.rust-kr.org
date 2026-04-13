// Rust의 1 | 2 패턴 → JS의 switch fall-through

const x = 1;

switch (x) {
  case 1:
  case 2:
    console.log("one or two");
    break;
  case 3:
    console.log("three");
    break;
  default:
    console.log("anything");
}
