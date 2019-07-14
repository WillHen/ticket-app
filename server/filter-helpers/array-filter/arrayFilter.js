module.exports = {
	filter: (userInput, dataValue) => {
		if (userInput === undefined) {
			return true;
		}
		return !userInput.length ? true : dataValue.some(element => element.includes(userInput));
	}
}