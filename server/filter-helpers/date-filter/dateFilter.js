module.exports = {
	filter: (userInput, dataValue) => {

		if (!userInput || !userInput.length) {
			return true;
		}

		if (dataValue === undefined && userInput === '@isNull@') {
			return true;
		}

		if (dataValue === undefined) {
			return false;
		}
		let parsedDateString = dataValue.split('T')[0];

		let inputDate = new Date(userInput.split('T')[0]);
		let dataValueDate = new Date(parsedDateString);
			

		return (
			inputDate.getFullYear() === dataValueDate.getFullYear() &&
			inputDate.getMonth() === dataValueDate.getMonth() &&
			inputDate.getDate() === dataValueDate.getDate()
		);
	}
};
