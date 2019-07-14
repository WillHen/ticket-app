const stringFilter = require('./stringFilter.js').filter;

describe('string filter function', () => {
	test('returns true if userInput matches the data value', () => {
		expect(stringFilter('landon', 'landon')).toBe(true);
	});

	test('returns false when userInput does not match data value', () => {
		expect(stringFilter('landon', 'joihn')).toBe(false);
	});

	test('returns true when no userInput is present', () => {
		expect(stringFilter(undefined, 'john')).toBe(true);
	});

	test('returns false when user input is present but dataValue is not present', () => {
		expect(stringFilter('landon', undefined)).toBe(false);
	});
});
