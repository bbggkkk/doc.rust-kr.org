const dice_roll = 9;

// match + 포괄 패턴 → switch + default
switch (dice_roll) {
  case 3:
    add_fancy_hat();
    break;
  case 7:
    remove_fancy_hat();
    break;
  default:
    move_player(dice_roll); // other → default에서 값 사용
    break;
}

function add_fancy_hat() {}
function remove_fancy_hat() {}
function move_player(num_spaces: number) {}
