const arrayFilter = require('./arrayFilter.js').filter;

describe('array filter function', () => {
	test('returns true the dataValue array contains the user input', () => {
		expect(arrayFilter('James', ['John', 'James', 'Steven', 'David'])).toBe(true);
	});

	test('returns false when userInput does not match dataValue', () => {
		expect(arrayFilter('Carlos', ['John', 'James', 'Steven', 'David'])).toBe(false);
	});

	test('returns true when no userInput is present', () => {
		expect(arrayFilter(undefined, [1,2,3,4])).toBe(true);
	});

	test('returns true when user input is @isNull@ and no dataValue is present', () => {
		expect(arrayFilter('@isNull@', undefined)).toBe(true);
	});

});
