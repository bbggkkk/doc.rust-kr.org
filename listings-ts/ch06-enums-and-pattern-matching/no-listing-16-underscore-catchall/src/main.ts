const dice_roll = 9;

// _ → default (값을 사용하지 않음)
switch (dice_roll) {
  case 3:
    add_fancy_hat();
    break;
  case 7:
    remove_fancy_hat();
    break;
  default:
    reroll();
    break;
}

function add_fancy_hat() {}
function remove_fancy_hat() {}
function reroll() {}
