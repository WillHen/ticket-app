const Users = require('../data/models/user.model.js').User;
const Organizations = require('../data/models/organization.model.js').Organization;
const Tickets = require('../data/models/ticket.model').Ticket;

const stringFilter = require('./string-filter/stringFilter.js').filter;
const arrayFilter = require('./array-filter/arrayFilter.js').filter;
const booleanFilter = require('./boolean-filter/booleanFilter.js').filter;
const numberFilter = require('./number-filter/numberFilter.js').filter;
const dateFilter = require('./date-filter//dateFilter.js').filter;

module.exports = {
	getFilterType: (table, property) => {
		let filterType = null;
		switch (table) {
			case 'users':
				filterType = Users[property] || null;
				break;
			case 'organizations':
				filterType = Organizations[property] || null;
				break;
			case 'tickets':
				filterType = Tickets[property] || null;
				break;
			default:
				filterType = null;
		}
		return filterType;
	},
	getFilterFunction: (type) => {
		let filterFunction = null;
		switch (type) {
			case 'string':
				filterFunction = stringFilter;
				break;
			case 'Array':
				filterFunction = arrayFilter;
				break;
			case 'boolean':
				filterFunction = booleanFilter;
				break;
			case 'number':
				filterFunction = numberFilter;
				break;
			case 'date':
				filterFunction = dateFilter;
				break;
			default:
				filterFunction = () =>{
					return false;
				}
		}

		return filterFunction;

	}
};
