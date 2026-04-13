// Rust: pub/비공개 필드 → JS: 클래스의 public/#private 필드

class Breakfast {
  toast;           // public (Rust의 pub 필드)
  #seasonalFruit;  // private (Rust의 비공개 필드)

  constructor(toast, seasonalFruit) {
    this.toast = toast;
    this.#seasonalFruit = seasonalFruit;
  }

  static summer(toast) {
    return new Breakfast(toast, "peaches");
  }
}

// 여름철 조식 주문
const meal = Breakfast.summer("Rye");
meal.toast = "Wheat"; // public 필드 — 수정 가능
console.log(`I'd like ${meal.toast} toast please`);

// meal.#seasonalFruit = "blueberries";
// SyntaxError: private 필드에 외부에서 접근 불가
