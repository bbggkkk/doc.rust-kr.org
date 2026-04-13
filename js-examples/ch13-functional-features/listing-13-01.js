// Rust의 enum → JS 문자열 상수
const ShirtColor = { Red: "Red", Blue: "Blue" };

class Inventory {
  constructor(shirts) {
    this.shirts = shirts;
  }

  // unwrap_or_else(|| self.most_stocked())
  // → JS의 ?? (nullish coalescing) 또는 콜백 패턴
  giveaway(userPreference) {
    return userPreference ?? this.mostStocked();
  }

  mostStocked() {
    const counts = { Red: 0, Blue: 0 };
    for (const color of this.shirts) {
      counts[color]++;
    }
    return counts.Red > counts.Blue ? ShirtColor.Red : ShirtColor.Blue;
  }
}

const store = new Inventory([
  ShirtColor.Blue, ShirtColor.Red, ShirtColor.Blue,
]);

const userPref1 = ShirtColor.Red;
console.log(`선호 ${userPref1} → ${store.giveaway(userPref1)}`);

const userPref2 = null; // Rust의 None → JS의 null
console.log(`선호 ${userPref2} → ${store.giveaway(userPref2)}`);
