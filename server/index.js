const express = require('express');
const app = express();
const port = 3000;

const users = require('./data/users.json');
const tickets = require('./data/tickets.json');
const organizations = require('./data/organizations.json');
const filterFunction = require('./filter-helpers/getFilterFunction.js');

const User = require('./data/models/user.model.js').User;
const Ticket = require('./data/models/ticket.model.js').Ticket;
const Organization = require('./data/models/organization.model.js')
	.Organization;

app.use(function(req, res, next) {

	res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

	res.setHeader(
		'Access-Control-Allow-Methods',
		'GET, POST, OPTIONS, PUT, PATCH, DELETE'
	);

	res.setHeader(
		'Access-Control-Allow-Headers',
		'X-Requested-With,content-type'
	);
	res.setHeader('Access-Control-Allow-Credentials', true);

	next();
});


/*
 * Route to filter on the User table.
 */
app.get('/users', (req, res) => {
	let dataKeys = Object.keys(req.query);
	let filterMap = prepareFilteringMap(dataKeys, 'users', req.query);

	let data = filterData(users, filterMap);
	res.send(data);
});

/*
 * Route to filter on the Organisations table.
 */
app.get('/organizations', (req, res) => {
	let dataKeys = Object.keys(req.query);
	let filterMap = prepareFilteringMap(dataKeys, 'organizations', req.query);

	let data = filterData(organizations, filterMap);
	res.send(data);
});

/*
 * Route to filter on the tickets table.
 */
app.get('/tickets', (req, res) => {
	let dataKeys = Object.keys(req.query);
	let filterMap = prepareFilteringMap(dataKeys, 'tickets', req.query);

	let data = filterData(tickets, filterMap);
	res.send(data);
});


/*
 * Route to filter on the all tables, with the filter value and
 * columns supplied.
 */
app.get('/general', (req, res) => {
	let dataKeys = Object.keys(req.query);
	let data = [];

	let hasValidTicketFields = dataKeys.every(property => {
		return filterFunction.getFilterType('tickets', property);
	});

	let hasValidUserFields = dataKeys.every(property => {
		return filterFunction.getFilterType('users', property);
	});

	let hasValidOrganizationFields = dataKeys.every(property => {
		return filterFunction.getFilterType('organizations', property);
	});

	if (hasValidTicketFields) {
		let filterTicketMap = prepareFilteringMap(
			dataKeys,
			'tickets',
			req.query
		);
		let ticketData = filterData(tickets, filterTicketMap);
		data = [...data, ...ticketData];
	}

	if (hasValidUserFields) {
		let filterUserMap = prepareFilteringMap(dataKeys, 'users', req.query);
		let userData = filterData(users, filterUserMap);
		data = [...data, ...userData];
	}

	if (hasValidOrganizationFields) {
		let filterOrganizationMap = prepareFilteringMap(
			dataKeys,
			'organizations',
			req.query
		);
		let OrganizationData = filterData(organizations, filterOrganizationMap);
		data = [...data, ...OrganizationData];
	}

	res.send(data);
});

/*
 * Route to filter on the all tables, with the filter value and no column supplied.
 */
app.get('/everything', (req, res) => {
	let data = { users: [], tickets: [], organizations: [] };
	let value = req.query.value;

	filterByUserInput(users, User, value, data.users);

	filterByUserInput(tickets, Ticket, value, data.tickets);

	filterByUserInput(organizations, Organization, value, data.organization);

	res.send(data);
});



/*
 * @param {data} the current table (set of data) we are filtering on.
 * @param {model} the current model so we can get the filter function we need (ie string)
 * @param {value} the current filter valeu the user has input.
 * @param {output} the array which we will add data to if it passes the filter condition.
 * This function is used to filter through tables with a user input regardless of column
 * so it serves to allow the user to filter all tables.
 */
const filterByUserInput = (data, model, value, output) => {
	for (let element of data) {
		for (let prop in element) {
			let filterTypeFunction = filterFunction.getFilterFunction(
				model[prop]
			);
			if (filterTypeFunction(value, element[prop])) {
				output.push(element);
				break;
			}
		}
	}
};


/*
 * @param {keys} the list of columns the user is filtering on.
 * @param {table} the current data set which is being filtered.
 * @param {query} the query object from the request, which includes
 * the column and the input value from the user.
 * @return {array} we return an array which contains the filter function we need to apply,
 * as well as the value and column.
 */
const prepareFilteringMap = (keys, table, query) => {
	return keys.map(property => {
		let type = filterFunction.getFilterType(table, property);
		return {
			function: filterFunction.getFilterFunction(type),
			value: query[property],
			property: property
		};
	});
};


/*
 * @param {dataSet} the table (data) which we will filter
 * @param {filterMap} the filters we need to apply on each element in the dataset.
 * @return {array} we return an array wit the filtered data.
 * In this function we loop over each element in the table. For each element (i.e a table or a user)
 * we apply all the filters that the user has set. If each filter passes, we return that element.
 */
const filterData = (dataSet, filterMap) => {
	return dataSet.filter(dataInstance => {
		return filterMap.reduce((memo, type) => {
			return (
				memo && type.function(type.value, dataInstance[type.property])
			);
		}, true);
	});
};

app.listen(port, () => console.log(`app listening on port ${port}!`));
