// derive 매크로 없이 수동으로 트레이트를 구현하는 예
// TS에서는 인터페이스를 구현하는 클래스로 표현

interface HelloMacro {
  helloMacro(): void;
}

class Pancakes implements HelloMacro {
  helloMacro(): void {
    console.log("Hello, Macro! My name is Pancakes!");
  }
}

new Pancakes().helloMacro();
