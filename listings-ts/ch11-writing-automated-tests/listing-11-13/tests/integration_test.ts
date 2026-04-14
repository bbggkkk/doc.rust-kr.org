import { addTwo } from "../src/lib"; // use adder;

test("it_adds_two", () => {
  expect(addTwo(2)).toBe(4); // assert_eq!(4, adder::add_two(2))
});
