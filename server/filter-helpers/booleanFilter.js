module.exports = {
	filter: (userInput, dataValue) => {
		if (!userInput.length) {
			return true;
		}
		if (userInput !== 'true' && userInput !== 'false') {
			return false;
		}

		userInput = userInput === 'true' ? true : false;

		return userInput === dataValue;

	}
}