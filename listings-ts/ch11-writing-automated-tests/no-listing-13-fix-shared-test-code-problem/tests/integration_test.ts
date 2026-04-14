import { addTwo } from "../src/lib"; // use adder;
import { setup } from "./common"; // mod common;

test("it_adds_two", () => {
  setup(); // common::setup()
  expect(addTwo(2)).toBe(4);
});
