const v1 = [1, 2, 3];

// Rust: for val in v1_iter { println!("Got: {}", val); }
// JS의 for...of는 Rust의 for...in과 동일한 역할
for (const val of v1) {
  console.log(`Got: ${val}`);
}
