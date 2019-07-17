module.exports = {
	filter: (userInput, dataValue) => {
		if (userInput === undefined) {
			return true;
		}

		if (dataValue === undefined && userInput === '@isNull@') {
			return true;
		}
		return !userInput.length ? true : dataValue.some(element => element.toLowerCase().includes(userInput.toLowerCase()));
	}
}