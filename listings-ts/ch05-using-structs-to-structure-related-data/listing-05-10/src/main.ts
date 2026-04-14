interface Rectangle {
  width: number;
  height: number;
}

const rect1: Rectangle = {
  width: 30,
  height: 50,
};

console.log(
  `The area of the rectangle is ${area(rect1)} square pixels.`
);

function area(rectangle: Rectangle): number {
  return rectangle.width * rectangle.height;
}
