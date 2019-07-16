module.exports = {
	filter: (userInput, dataValue) => {
		if (userInput === undefined || !userInput.length) {
			return true;
		}

		if (dataValue === undefined && userInput === '@isNull@') {
			return true;
		}
		if (userInput !== 'true' && userInput !== 'false') {
			return false;
		}

		userInput = userInput === 'true' ? true : false;



		return userInput === dataValue;

	}
}