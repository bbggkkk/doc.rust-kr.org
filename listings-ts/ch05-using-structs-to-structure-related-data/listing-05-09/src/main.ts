const rect1: [number, number] = [30, 50];

console.log(
  `The area of the rectangle is ${area(rect1)} square pixels.`
);

function area(dimensions: [number, number]): number {
  return dimensions[0] * dimensions[1];
}
