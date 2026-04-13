// Rust의 into_iter().filter().collect() → JS의 filter()
function shoesInSize(shoes, shoeSize) {
  // JS의 filter()는 클로저가 외부 변수 shoeSize를 참조로 캡처
  return shoes.filter(s => s.size === shoeSize);
}

const shoes = [
  { size: 10, style: "sneaker" },
  { size: 13, style: "sandal" },
  { size: 10, style: "boot" },
];

const inMySize = shoesInSize(shoes, 10);
console.log(inMySize);
// [{ size: 10, style: "sneaker" }, { size: 10, style: "boot" }]
