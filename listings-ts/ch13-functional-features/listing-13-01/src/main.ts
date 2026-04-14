type ShirtColor = "Red" | "Blue";

class Inventory {
  shirts: ShirtColor[];

  constructor(shirts: ShirtColor[]) {
    this.shirts = shirts;
  }

  // 클로저: () => this.mostStocked()
  // Rust의 unwrap_or_else(|| self.most_stocked())는
  // JS의 ?? (nullish coalescing)과 유사
  giveaway(userPreference: ShirtColor | null): ShirtColor {
    return userPreference ?? this.mostStocked();
  }

  mostStocked(): ShirtColor {
    let numRed = 0;
    let numBlue = 0;

    for (const color of this.shirts) {
      if (color === "Red") numRed += 1;
      else numBlue += 1;
    }
    return numRed > numBlue ? "Red" : "Blue";
  }
}

const store = new Inventory(["Blue", "Red", "Blue"]);

const userPref1: ShirtColor = "Red";
const giveaway1 = store.giveaway(userPref1);
console.log(`The user with preference ${userPref1} gets ${giveaway1}`);

const userPref2 = null;
const giveaway2 = store.giveaway(userPref2);
console.log(`The user with preference ${userPref2} gets ${giveaway2}`);
