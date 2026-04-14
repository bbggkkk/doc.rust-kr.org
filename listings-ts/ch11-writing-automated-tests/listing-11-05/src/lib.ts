interface Rectangle {
  width: number;
  height: number;
}

function canHold(self: Rectangle, other: Rectangle): boolean {
  return self.width > other.width && self.height > other.height;
}
