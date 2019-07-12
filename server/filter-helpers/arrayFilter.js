module.exports = {
	filter: (userInput, dataValue) => {
		return !userInput.length ? true : dataValue.indexOf(userInput) > -1;
	}
}