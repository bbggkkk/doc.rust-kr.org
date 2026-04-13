// Rust의 매치 가드 → JS의 switch(true) + 조건문

const num = { type: "some", value: 4 };

switch (true) {
  case num.type === "some" && num.value % 2 === 0:
    console.log(`The number ${num.value} is even`);
    break;
  case num.type === "some":
    console.log(`The number ${num.value} is odd`);
    break;
  default:
    console.log("Not a number");
}
