const trainerFunctions = {
	reverseString(value) {
		let str = String(value);
		return str.split("").reverse().join("");
	},
	reverseAndNegate(numberArray) {
		numberArray.forEach((element, index) => {
			numberArray[index] = element ? parseFloat(element) * -1 : 0;
		});

		return numberArray.reverse();
	},
};

export default trainerFunctions;
