// 같은 이름의 메서드가 여러 트레이트/타입에 존재하는 경우
// TS에서는 인터페이스 + 클래스로 표현

interface Pilot {
  fly(): void;
}

interface Wizard {
  fly(): void;
}

class Human {
  fly(): void {
    console.log("*waving arms furiously*");
  }

  // Pilot의 fly — Rust에서는 Pilot::fly(&self)로 호출
  flyAsPilot(): void {
    console.log("This is your captain speaking.");
  }

  // Wizard의 fly — Rust에서는 Wizard::fly(&self)로 호출
  flyAsWizard(): void {
    console.log("Up!");
  }
}
