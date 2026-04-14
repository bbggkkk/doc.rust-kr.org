// Option<i32> → number | null
function plus_one(x: number | null): number | null {
  if (x === null) {   // None => None
    return null;
  }
  return x + 1;       // Some(i) => Some(i + 1)
}

const five = 5;                  // Some(5)
const six = plus_one(five);      // Some(6)
const none = plus_one(null);     // None
