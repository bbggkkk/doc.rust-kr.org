// 트레이트 객체 → 인터페이스 타입의 다형성
const screen = new Screen();
screen.components = [
  new SelectBox({
    width: 75,
    height: 10,
    options: ["Yes", "Maybe", "No"],
  }),
  new Button({
    width: 50,
    height: 10,
    label: "OK",
  }),
];

screen.run();
