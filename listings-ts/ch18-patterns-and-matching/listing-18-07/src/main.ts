// 함수 매개변수에서 구조 분해
function printCoordinates([x, y]: [number, number]): void {
  console.log(`Current location: (${x}, ${y})`);
}

const point: [number, number] = [3, 5];
printCoordinates(point);
