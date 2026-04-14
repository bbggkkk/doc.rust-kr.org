const v = ["a", "b", "c"];

// for (index, value) in v.iter().enumerate() → forEach / entries
for (const [index, value] of v.entries()) {
  console.log(`${value} is at index ${index}`);
}
