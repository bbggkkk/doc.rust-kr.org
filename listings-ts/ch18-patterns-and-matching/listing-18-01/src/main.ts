const favoriteColor: string | null = null;
const isTuesday = false;
const age: number | null = parseInt("34") || null;

if (favoriteColor !== null) {
  console.log(`Using your favorite color, ${favoriteColor}, as the background`);
} else if (isTuesday) {
  console.log("Tuesday is green day!");
} else if (age !== null) {
  if (age > 30) {
    console.log("Using purple as the background color");
  } else {
    console.log("Using orange as the background color");
  }
} else {
  console.log("Using blue as the background color");
}
