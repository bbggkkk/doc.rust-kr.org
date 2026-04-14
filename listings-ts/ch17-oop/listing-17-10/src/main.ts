// String은 Draw 인터페이스를 구현하지 않으므로 타입 에러 발생
const screen = new Screen();
screen.components = ["Hi"]; // 타입 에러! string은 Draw가 아닙니다

screen.run();
