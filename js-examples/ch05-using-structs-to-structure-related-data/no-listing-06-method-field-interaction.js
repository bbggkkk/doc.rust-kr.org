// 필드와 동일한 이름의 메서드 — JavaScript에서는 getter를 사용합니다

class Rectangle {
  #width; // 비공개 필드

  constructor(width, height) {
    this.#width = width;
    this.height = height;
  }

  // JavaScript에서 같은 이름의 getter와 메서드를 동시에 가질 수 없으므로
  // getter를 사용합니다
  get width() {
    return this.#width > 0;
  }
}

const rect1 = new Rectangle(30, 50);

if (rect1.width) {
  console.log(`The rectangle has a nonzero width; it is ${rect1.height}`);
}
