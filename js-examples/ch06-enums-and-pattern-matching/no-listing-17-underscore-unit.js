// _ 패턴으로 아무 일도 하지 않기

const diceRoll = 9;

switch (diceRoll) {
  case 3:
    addFancyHat();
    break;
  case 7:
    removeFancyHat();
    break;
  default:
    // 아무 일도 하지 않음 — Rust의 _ => () 에 해당
    break;
}

function addFancyHat() {}
function removeFancyHat() {}
