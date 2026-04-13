// Rust의 for (index, value) in v.iter().enumerate()
// → JS의 for...of + entries()

const v = ["a", "b", "c"];

for (const [index, value] of v.entries()) {
  console.log(`${index} is at index ${value}`);
}
