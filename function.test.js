
const user = require("./function.js");

test("add two numbers", () => {
	let number = 2;
	let num = 5;
	let ans = user(2, 5)
	expect(ans).toBe(7);
	});

