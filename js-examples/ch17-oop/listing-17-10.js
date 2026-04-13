// Rust에서는 Draw 트레이트를 구현하지 않은 타입을 넣으면 컴파일 에러가 납니다.
// JS에서는 draw() 메서드가 없는 객체를 넣어도 런타임까지 에러가 발생하지 않습니다.

class Screen {
  components = [];

  run() {
    for (const component of this.components) {
      component.draw(); // draw()가 없으면 런타임 TypeError 발생
    }
  }
}

const screen = new Screen();
screen.components.push("not a component"); // JS에서는 허용됨 — Rust에서는 컴파일 에러!
// screen.run(); // TypeError: component.draw is not a function
