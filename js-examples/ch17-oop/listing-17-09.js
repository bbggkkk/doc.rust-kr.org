// Rust의 트레이트 객체를 통한 다형성 → JS의 덕 타이핑으로 자연스럽게 구현

class Screen {
  constructor(components) {
    this.components = components;
  }
  run() {
    for (const component of this.components) {
      component.draw();
    }
  }
}

class SelectBox {
  constructor(width, height, options) {
    this.width = width;
    this.height = height;
    this.options = options;
  }
  draw() {
    console.log(`Drawing select box with options: ${this.options}`);
  }
}

class Button {
  constructor(width, height, label) {
    this.width = width;
    this.height = height;
    this.label = label;
  }
  draw() {
    console.log(`Drawing button: ${this.label}`);
  }
}

const screen = new Screen([
  new SelectBox(75, 10, ["Yes", "Maybe", "No"]),
  new Button(50, 10, "OK"),
]);

screen.run();
