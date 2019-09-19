const { addTwo } = require(".");

test.each([[1, 3], [2, 4], [50, 52]])(".addTwo to %i is %i", (n, expected) => {
  expect(addTwo(n)).toBe(expected);
});
