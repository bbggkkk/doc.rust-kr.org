// Rust의 포괄 패턴(other) → JS의 switch default
const diceRoll = 9;
switch (diceRoll) {
    case 3:  addFancyHat();       break;
    case 7:  removeFancyHat();    break;
    default: movePlayer(diceRoll); break; // other => move_player(other)
}
