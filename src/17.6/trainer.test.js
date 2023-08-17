import trainerFunctions from "./trainer";

describe(`
	Тестирование функций
	из 17.6.1 reverseString
	из 17.6.2 reverseAndNegate
`, () => {
	it("test reverseString", () => {
		expect(trainerFunctions.reverseString("кот")).toBe("ток");
		expect(trainerFunctions.reverseString("собака")).toBe("акабос");
		expect(trainerFunctions.reverseString("попугай")).toBe("йагупоп");
	});

	it("test reverseAndNegate", () => {
		expect(trainerFunctions.reverseAndNegate([1, "2", "-3", 4])).toStrictEqual([
			-4, 3, -2, -1,
		]);

		expect(trainerFunctions.reverseAndNegate([NaN, null])).toStrictEqual([
			0, 0,
		]);

		expect(trainerFunctions.reverseAndNegate([null, undefined])).toStrictEqual([
			0, 0,
		]);
	});
});
