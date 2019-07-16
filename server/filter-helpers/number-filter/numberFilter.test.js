const numberFilter = require('./numberFilter.js').filter;

describe('number filter function', () => {
	test('returns true if userInput matches the data value', () => {
		expect(numberFilter(1, 1)).toBe(true);
	});

	test('returns false when userInput does not match data value', () => {
		expect(numberFilter(1, 2)).toBe(false);
	});

	test('returns true when no userInput is present', () => {
		expect(numberFilter(undefined, 3)).toBe(true);
	});

	test('returns false when user input is present but dataValue is not present', () => {
		expect(numberFilter(1, undefined)).toBe(false);
	});

	test('returns true when user input is @isNull@ and no dataValue is present', () => {
		expect(numberFilter('@isNull@', undefined)).toBe(true);
	});
});
