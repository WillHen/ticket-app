module.exports = {
	filter: (userInput, dataValue) => {
		return !userInput.length ? true :  userInput === dataValue;
	}
};
