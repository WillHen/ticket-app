const booleanFilter = require('./booleanFilter.js').filter;

describe('boolean filter function', () => {
	test('returns true if userInput matches the data value', () => {
		expect(booleanFilter('true', true)).toBe(true);
	});

	test('returns false when userInput does not match data value', () => {
		expect(booleanFilter('false', true)).toBe(false);
	});

	test('returns true when no userInput is present', () => {
		expect(booleanFilter(undefined, true)).toBe(true);
	});

	test('returns false when userInput is not equal to stringified true or false', () => {
		expect(booleanFilter('John', true)).toBe(false);
	});


	test('returns true when user input is @isNull@ and no dataValue is present', () => {
		expect(booleanFilter('@isNull@', undefined)).toBe(true);
	});
});
