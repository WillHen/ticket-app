module.exports = {
	filter: (userInput, dataValue) => {
		if (userInput === undefined) {
			return true;
		}
		if(!dataValue) {
			return false;
		}
		return !userInput.length ? true :  dataValue.toLowerCase().includes(userInput.toLowerCase());
	}
};
