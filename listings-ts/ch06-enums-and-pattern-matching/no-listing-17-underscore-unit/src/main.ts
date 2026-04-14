const dice_roll = 9;

// _ => () → default: break (아무것도 하지 않음)
switch (dice_roll) {
  case 3:
    add_fancy_hat();
    break;
  case 7:
    remove_fancy_hat();
    break;
  default:
    break; // 아무 일도 하지 않음
}

function add_fancy_hat() {}
function remove_fancy_hat() {}
