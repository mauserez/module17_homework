const utils = {
	addition(a, b) {
		return parseFloat(a) + parseFloat(b);
	},
	multiplication(a, b) {
		return parseFloat(a) * parseFloat(b);
	},
	division(a, b) {
		return parseFloat(b) === 0 ? 0 : parseFloat(a) / parseFloat(b);
	},
	subtraction(a, b) {
		return parseFloat(a) - parseFloat(b);
	},
};

export default utils;
