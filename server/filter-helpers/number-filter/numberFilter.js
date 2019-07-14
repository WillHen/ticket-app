module.exports = {
	filter: (userInput, dataValue) => {
		if (userInput === undefined) {
			return true;
		}
		if (dataValue === undefined) {
			return false;
		}
		return !userInput.toString().length ? true : dataValue.toString().includes(userInput.toString());
	}
};
