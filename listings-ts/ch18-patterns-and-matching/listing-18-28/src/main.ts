const x = 4;
const y = false;

// (4 | 5 | 6) if y → 다중 패턴에 매치 가드 적용
if ((x === 4 || x === 5 || x === 6) && y) {
  console.log("yes");
} else {
  console.log("no");
}
