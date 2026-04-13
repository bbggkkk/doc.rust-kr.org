// Rust의 if let / else if / else if let → JS의 if/else + 구조 분해

const favoriteColor = undefined;
const istuesday = false;
const age = "34";

if (favoriteColor) {
  console.log(`Using your favorite color, ${favoriteColor}, as the background`);
} else if (istuesday) {
  console.log("Tuesday is green day!");
} else {
  const parsed = parseInt(age, 10);
  if (!isNaN(parsed)) {
    if (parsed > 30) {
      console.log("Using purple as the background color");
    } else {
      console.log("Using orange as the background color");
    }
  } else {
    console.log("Using blue as the background color");
  }
}
