const dateFilter = require('./dateFilter.js').filter;

describe('date filter function', () => {
	test('returns true if userInput matches the data value', () => {
		let userDate = new Date().toISOString();
		let inputDate = new Date().toISOString();
		expect(dateFilter(userDate, inputDate)).toBe(true);
	});

	test('returns false when userInput does not match data value', () => {
		let userDate = new Date().toISOString();
		let inputDate = new Date('2016-04-15').toISOString();
		expect(dateFilter(userDate, inputDate)).toBe(false);
	});

	test('returns true when no userInput is present', () => {
		expect(dateFilter(undefined, new Date().toISOString())).toBe(true);
	});

	test('returns true when user input is @isNull@ and no dataValue is present', () => {
		expect(dateFilter('@isNull@', undefined)).toBe(true);
	});
});
