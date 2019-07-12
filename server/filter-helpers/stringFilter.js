module.exports = {
	filter: (userInput, dataValue) => {
		console.log(userInput, dataValue)
		return !userInput.length ? true :  userInput === dataValue;
	}
};
