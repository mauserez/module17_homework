import utils from "./utils";
//import { sum } from "./sum";

describe(`
	addition,
	subtraction,
	multiplication,
	division
`, () => {
	it("test addition", () => {
		expect(utils.addition(0, 0)).toBe(0);
		expect(utils.addition(0, 1)).toBe(1);
		expect(utils.addition(1, 2)).toBe(3);
	});

	it("test subtraction", () => {
		expect(utils.subtraction(0, -1)).toBe(1);
		expect(utils.subtraction(2, 2)).toBe(0);
		expect(utils.subtraction(4, 2)).toBe(2);
	});

	it("test multiplication", () => {
		expect(utils.multiplication(0, 0)).toBe(0);
		expect(utils.multiplication(5, 2)).toBe(10);
		expect(utils.multiplication(1, 2)).toBe(2);
	});

	it("test division", () => {
		expect(utils.division(2, 2)).toBe(1);
		expect(utils.division(3, 1)).toBe(3);
		expect(utils.division(1, 2)).toBe(0.5);
	});
});
