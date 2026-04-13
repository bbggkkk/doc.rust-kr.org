// Rust의 함수 매개변수 패턴 → JS의 매개변수 구조 분해

function printCoordinates([x, y]) {
  console.log(`Current location: (${x}, ${y})`);
}

printCoordinates([3, 5]);
