// Rust의 매치 가드로 외부 변수 비교 → JS의 if-else

const x = { type: "some", value: 5 };
const y = 10;

if (x.type === "some" && x.value === 50) {
  console.log("Got 50");
} else if (x.type === "some" && x.value === y) {
  console.log(`Matched, n = ${x.value}`);
} else {
  console.log(`Default case, x = ${JSON.stringify(x)}`);
}

console.log(`at the end: x = ${JSON.stringify(x)}, y = ${y}`);
