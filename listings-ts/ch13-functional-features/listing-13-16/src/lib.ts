interface Shoe {
  size: number;
  style: string;
}

// Rust: shoes.into_iter().filter(|s| s.size == shoe_size).collect()
// .filter(|s| s.size == shoe_size) → .filter((s) => s.size === shoeSize)
// .collect() → JS의 .filter()는 이미 새 배열을 반환
function shoesInSize(shoes: Shoe[], shoeSize: number): Shoe[] {
  return shoes.filter((s) => s.size === shoeSize);
}

// 테스트
const shoes: Shoe[] = [
  { size: 10, style: "sneaker" },
  { size: 13, style: "sandal" },
  { size: 10, style: "boot" },
];

const inMySize = shoesInSize(shoes, 10);
console.assert(inMySize.length === 2);
console.assert(inMySize[0].style === "sneaker");
console.assert(inMySize[1].style === "boot");
