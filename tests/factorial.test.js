const { default: expect } = require("expect");
const factorial = require("../factorial");

test("factorial", () => {
    let actual = factorial(4);
    expect(actual).toBe(24);
});