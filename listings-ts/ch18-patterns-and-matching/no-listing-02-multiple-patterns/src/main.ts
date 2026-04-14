const x = 1;

// 1 | 2 → 다중 case
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
