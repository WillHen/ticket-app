const getFilterFunctions = require('./getFilterFunction.js');


describe('getFilterType function', () => {
	test('Can return the correct filter type from a dataset', () => {
		expect(getFilterFunctions.getFilterType('users', 'name')).toBe(
			'string'
		);
		expect(
			getFilterFunctions.getFilterType('tickets', 'submitter_id')
		).toBe('number');
		expect(getFilterFunctions.getFilterType('organizations', 'tags')).toBe(
			'Array'
		);
	});

	test('Can return null when no valid dataset property is provided', () => {
		expect(getFilterFunctions.getFilterType('users', 'fb_profile')).toBe(
			null
		);
	});

	test('Can return null when no valid dataset is provided', () => {
		expect(getFilterFunctions.getFilterType('members', 'name')).toBe(null);
	});
});

describe('GetFilterFunction function', () => { 

	test('can return a function when given a valid type', ()=> {
		expect(typeof getFilterFunctions.getFilterFunction('string')).toBe('function');
	})

})