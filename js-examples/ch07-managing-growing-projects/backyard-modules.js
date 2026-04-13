// Rust의 mod/use → JS의 import/export (ES Modules)

// --- src/garden/vegetables.js ---
// export class Asparagus {}

// --- src/garden.js ---
// export { Asparagus } from './garden/vegetables.js';

// --- src/main.js ---
import { Asparagus } from './garden/vegetables.js';

const plant = new Asparagus();
console.log("I'm growing", plant);
