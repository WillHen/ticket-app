const express = require('express');
const app = express();
const port = 3000;

const users = require('./data/users.json');
const tickets = require('./data/tickets.json');
const organizations = require('./data/organizations.json');
const filterFunction = require('./filter-helpers/getFilterFunction.js');

app.get('/users', (req, res) => {
	let dataKeys = Object.keys(req.query);
	let filterMap = prepareFilteringMap(dataKeys, 'users', req.query);

	let data = filterData(users, filterMap);
	res.send(data);
});

app.get('/organizations', (req, res) => {
	let dataKeys = Object.keys(req.query);
	let filterMap = prepareFilteringMap(dataKeys, 'organizations', req.query);

	let data = filterData(organizations, filterMap);
	res.send(data);
});

app.get('/tickets', (req, res) => {
	let dataKeys = Object.keys(req.query);
	let filterMap = prepareFilteringMap(dataKeys, 'tickets', req.query);

	let data = filterData(tickets, filterMap);
	res.send(data);
});

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

const filterData = (dataSet, filterMap) => {
	return dataSet.filter(dataInstance => {
		return filterMap.reduce((memo, type) => {
			return (
				memo && type.function(type.value, dataInstance[type.property])
			);
		}, true);
	});
};

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
