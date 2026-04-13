// Rust의 _ 패턴(값 무시) → JS의 default (값을 사용하지 않음)
const diceRoll = 9;
switch (diceRoll) {
    case 3:  addFancyHat();    break;
    case 7:  removeFancyHat(); break;
    default: reroll();         break; // _ => reroll()
}
